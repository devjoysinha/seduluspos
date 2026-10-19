import { HONEYPOT_FIELD, validateLead, type Lead } from "@/lib/contact";

// Per-IP sliding window. A single container serves the site, so in-memory is enough.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_CHARS = 10_000;
const recentByIp = new Map<string, number[]>();

const DELIVERY_ERROR = "We couldn't send your request right now.";

const submittedAt = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  dateStyle: "medium",
  timeStyle: "short",
});

function clientIp(request: Request) {
  // nginx appends the address it saw to X-Forwarded-For, and Next only fills the
  // header in when it's missing, so the last entry is the one a client can't forge.
  return request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() || "unknown";
}

// Records the attempt and returns 0, or the seconds to wait if over the limit.
function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    recentByIp.set(ip, recent);
    return Math.ceil((recent[0] + RATE_WINDOW_MS - now) / 1000);
  }
  recent.push(now);
  recentByIp.set(ip, recent);
  if (recentByIp.size > 10_000) {
    for (const [key, times] of recentByIp) {
      if (now - times[times.length - 1] >= RATE_WINDOW_MS) recentByIp.delete(key);
    }
  }
  return 0;
}

function fail(status: number, error: string, extra?: { field?: string; headers?: HeadersInit }) {
  return Response.json({ ok: false, error, field: extra?.field }, { status, headers: extra?.headers });
}

function leadText(lead: Lead) {
  return [
    "New demo request from sedulus.in/contact",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Restaurant: ${lead.restaurant}`,
    `Type: ${lead.type}`,
    `Outlets: ${lead.outlets ?? "Not given"}`,
    `Submitted: ${submittedAt.format(new Date())} IST`,
    "",
    "Message:",
    lead.message ?? "(none)",
    "",
    `Reply to this email to answer ${lead.name} directly.`,
  ].join("\n");
}

async function sendLead(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.split(",").map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !to?.length) throw new Error("RESEND_API_KEY or CONTACT_TO_EMAIL is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "sedulus-site-contact-form",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Sedulus Website <onboarding@resend.dev>",
      to,
      reply_to: lead.email,
      subject: `Demo request: ${lead.restaurant} (${lead.type})`,
      text: leadText(lead),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  const data: { id?: string; name?: string; message?: string } | null = await res.json().catch(() => null);
  if (!res.ok || !data?.id) {
    throw new Error(`Resend responded ${res.status} ${data?.name ?? ""}: ${data?.message ?? "no message"}`);
  }
  return data.id;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const retryAfter = rateLimit(ip);
  if (retryAfter) {
    console.warn(`[contact] rate limited ${ip}`);
    return fail(429, "Too many requests. Please wait a few minutes and try again.", {
      headers: { "Retry-After": String(retryAfter) },
    });
  }

  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return fail(415, "Unsupported request format.");
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_CHARS) {
    return fail(413, "Your message is too long.");
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) return fail(413, "Your message is too long.");

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request.");
  }

  // Look like a success so bots don't learn the field is a trap.
  const honeypot = (body as Record<string, unknown> | null)?.[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim()) {
    console.warn(`[contact] honeypot filled, dropped submission from ${ip}`);
    return Response.json({ ok: true });
  }

  const result = validateLead(body);
  if (!result.ok) return fail(400, result.error, { field: result.field });

  try {
    const id = await sendLead(result.lead);
    console.info(`[contact] lead delivered, resend id ${id}`);
    return Response.json({ ok: true });
  } catch (err) {
    // Logged in full so a lead can still be recovered from `docker logs` if email fails.
    console.error("[contact] lead not delivered:", err, JSON.stringify(result.lead));
    return fail(502, DELIVERY_ERROR);
  }
}
