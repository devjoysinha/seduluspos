"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Check } from "@/components/ui";
import { HONEYPOT_FIELD, LIMITS, outletOptions, restaurantTypes, type LeadField } from "@/lib/contact";

const labelCls = "mb-2 block text-[13px] font-medium text-[#d9d2d9]";
const fieldCls =
  "w-full rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-[14px] text-[color:var(--ink)] placeholder:text-[#8a8590] transition-colors focus:border-primary focus:bg-white/[0.06] aria-[invalid=true]:border-[#ff7b7b]/70";

const PHONE = { display: "+91-9876543210", href: "tel:+919876543210" };
const EMAIL = { display: "hello@sedulus.in", href: "mailto:hello@sedulus.in" };

const contactItems = [
  {
    label: "Call Us",
    value: PHONE.display,
    href: PHONE.href,
    note: "Mon — Sat, 9 AM to 8 PM IST",
    paths: [
      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
    ],
  },
  {
    label: "Email",
    value: EMAIL.display,
    href: EMAIL.href,
    paths: [
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    ],
  },
  {
    label: "Office",
    value: "Kolkata, West Bengal, India",
    paths: [
      "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
      "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    ],
  },
];

type FormError = { message: string; field?: LeadField };

const subscribeNoop = () => () => {};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<FormError | null>(null);
  // false for the server render and hydration, so the form can't be submitted
  // natively (fields in the URL, nothing sent) before handleSubmit is attached.
  const hydrated = useSyncExternalStore(subscribeNoop, () => true, () => false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data: { ok?: boolean; error?: string; field?: LeadField } | null = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setStatus("sent");
        return;
      }
      setError({ message: data?.error ?? "We couldn't send your request right now.", field: data?.field });
      if (data?.field) (form.elements.namedItem(data.field) as HTMLElement | null)?.focus();
    } catch {
      setError({ message: "We couldn't reach our server. Check your connection and try again." });
    }
    setStatus("idle");
  }

  const invalid = (field: LeadField) =>
    error?.field === field ? { "aria-invalid": true, "aria-describedby": "contact-error" } : {};

  return (
    <section className="relative mx-auto w-[min(1280px,88%)] pb-24 pt-20">
      <div className="hero-grid" aria-hidden="true" />
      <div className="grid gap-14 md:grid-cols-[1fr_1.05fr] md:gap-16">
        <div>
          <span className="eyebrow mb-6 flex w-fit">
            <span className="status-dot" /> get in touch
          </span>
          <h1 className="text-[clamp(40px,4.6vw,62px)] font-medium leading-[1.08] tracking-[-0.045em]">
            Let&apos;s Set Up
            <br />
            <em className="text-[1.1em] tracking-[-0.035em]">Your Restaurant</em>
          </h1>
          <p className="mb-10 mt-6 max-w-[460px] text-[16px] leading-[1.75] text-[#a8a2a7]">
            Fill in the form and our product specialist will reach out within 2 hours to schedule your free demo.
          </p>

          <ul className="m-0 flex list-none flex-col gap-6 p-0">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/[0.07] text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.paths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                </span>
                <div>
                  <p className="micro mb-1 text-[#a58ba0]">{item.label.toLowerCase()}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[16px] transition-colors hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[16px]">{item.value}</p>
                  )}
                  {item.note && <p className="micro mt-1">{item.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8">
          {status === "sent" ? (
            <div role="status" className="py-12 text-center">
              <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Check className="h-7 w-7" />
              </span>
              <h2 className="mb-3 text-[30px] font-medium tracking-[-0.03em]">Thank You!</h2>
              <p className="mx-auto max-w-[360px] text-[15px] leading-[1.7] text-[#a39aa3]">
                Our team will reach out within 2 hours. In the meantime, check out our{" "}
                <Link href="/features" className="font-medium text-primary underline-offset-4 hover:underline">
                  features
                </Link>{" "}
                page.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h2 className="mb-2 text-[26px] font-medium tracking-[-0.03em]">Request a Free Demo</h2>
                <p className="text-[14px] text-[#a39aa3]">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={LIMITS.name}
                    autoComplete="name"
                    className={fieldCls}
                    placeholder="Rajesh Sharma"
                    {...invalid("name")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    maxLength={LIMITS.phone}
                    autoComplete="tel"
                    className={fieldCls}
                    placeholder="+91 98765 43210"
                    {...invalid("phone")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={LIMITS.email}
                  autoComplete="email"
                  className={fieldCls}
                  placeholder="rajesh@spicegarden.com"
                  {...invalid("email")}
                />
              </div>
              <div>
                <label htmlFor="restaurant" className={labelCls}>
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  required
                  maxLength={LIMITS.restaurant}
                  autoComplete="organization"
                  className={fieldCls}
                  placeholder="Spice Garden"
                  {...invalid("restaurant")}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="type" className={labelCls}>
                    Restaurant Type *
                  </label>
                  <select id="type" name="type" required className={fieldCls} {...invalid("type")}>
                    <option value="">Select type</option>
                    {restaurantTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="outlets" className={labelCls}>
                    Number of Outlets
                  </label>
                  <select id="outlets" name="outlets" className={fieldCls} {...invalid("outlets")}>
                    {outletOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelCls}>
                  Anything else?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={LIMITS.message}
                  className={`${fieldCls} resize-none`}
                  placeholder="Tell us about your requirements..."
                  {...invalid("message")}
                />
              </div>
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor={HONEYPOT_FIELD}>Website</label>
                <input type="text" id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
              </div>
              {error && (
                <p
                  id="contact-error"
                  role="alert"
                  className="rounded-lg border border-[#ff7b7b]/30 bg-[#ff7b7b]/[0.08] px-4 py-3 text-[13px] leading-[1.6] text-[#ffc4c4]"
                >
                  {error.message}
                  {!error.field && (
                    <>
                      {" "}
                      You can also call{" "}
                      <a href={PHONE.href} className="font-medium text-[color:var(--ink)] underline underline-offset-4">
                        {PHONE.display}
                      </a>{" "}
                      or email{" "}
                      <a href={EMAIL.href} className="font-medium text-[color:var(--ink)] underline underline-offset-4">
                        {EMAIL.display}
                      </a>
                      .
                    </>
                  )}
                </p>
              )}
              <button
                type="submit"
                disabled={!hydrated || status === "sending"}
                className="btn-primary w-full disabled:pointer-events-none aria-busy:opacity-70"
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Request Demo <span aria-hidden="true">&#8599;</span>
                  </>
                )}
              </button>
              <p className="micro text-center">
                By submitting, you agree to our Privacy Policy. We won&apos;t spam you.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
