// Shared by the contact form (client) and /api/contact (server) so the
// options a visitor can pick are exactly the ones the server accepts.

export const restaurantTypes = [
  "Fine Dining",
  "Casual Dining",
  "QSR / Fast Food",
  "Cafe / Bakery",
  "Cloud Kitchen",
  "Food Court",
  "Bar & Lounge",
  "Dhaba / Street Food",
  "Chain / Franchise",
  "Other",
];

export const outletOptions = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2 — 5" },
  { value: "6-20", label: "6 — 20" },
  { value: "20+", label: "20+" },
];

// Hidden from people; bots that fill every input fill this too.
export const HONEYPOT_FIELD = "website";

export const LIMITS = {
  name: 100,
  phone: 20,
  email: 254,
  restaurant: 150,
  message: 2000,
};

export type Lead = {
  name: string;
  phone: string;
  email: string;
  restaurant: string;
  type: string;
  outlets?: string;
  message?: string;
};

export type LeadField = keyof Lead;

export type LeadValidation =
  | { ok: true; lead: Lead }
  | { ok: false; field: LeadField; error: string };

const EMAIL_RE = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/;
const PHONE_RE = /^\+?[\d\s().-]+$/;

export function validateLead(input: unknown): LeadValidation {
  const data = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const str = (key: LeadField) => {
    const value = data[key];
    return typeof value === "string" ? value.trim() : "";
  };
  const line = (key: LeadField) => str(key).replace(/\s+/g, " ");
  const invalid = (field: LeadField, error: string): LeadValidation => ({ ok: false, field, error });

  const name = line("name");
  if (!name || name.length > LIMITS.name) return invalid("name", "Please enter your full name.");

  const phone = line("phone");
  const digits = phone.replace(/\D/g, "").length;
  if (phone.length > LIMITS.phone || !PHONE_RE.test(phone) || digits < 7 || digits > 15) {
    return invalid("phone", "Please enter a valid phone number.");
  }

  const email = str("email");
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return invalid("email", "Please enter a valid email address.");
  }

  const restaurant = line("restaurant");
  if (!restaurant || restaurant.length > LIMITS.restaurant) {
    return invalid("restaurant", "Please enter your restaurant's name.");
  }

  const type = str("type");
  if (!restaurantTypes.includes(type)) return invalid("type", "Please select your restaurant type.");

  const outlets = str("outlets");
  if (outlets && !outletOptions.some((o) => o.value === outlets)) {
    return invalid("outlets", "Please select the number of outlets.");
  }

  const message = str("message");
  if (message.length > LIMITS.message) {
    return invalid("message", `Please keep your message under ${LIMITS.message} characters.`);
  }

  return {
    ok: true,
    lead: {
      name,
      phone,
      email,
      restaurant,
      type,
      outlets: outlets || undefined,
      message: message || undefined,
    },
  };
}
