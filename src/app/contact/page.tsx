"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { HONEYPOT_FIELD, LIMITS, outletOptions, restaurantTypes, type LeadField } from "@/lib/contact";

const PHONE = { display: "+91 8420117725", href: "tel:+918420117725" };
const EMAIL = { display: "joysinha@sedulus.in", href: "mailto:joysinha@sedulus.in" };

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
    <section className="contact-layout section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="contact-copy">
        <span className="eyebrow">
          <span className="status-dot" /> get in touch
        </span>
        <h1>
          Let&apos;s Set Up{" "}
          <br />
          <em>Your Restaurant</em>
        </h1>
        <p className="contact-lede">
          Fill in the form and our product specialist will reach out within 2 hours to schedule your free demo.
        </p>

        <ul className="contact-list">
          {contactItems.map((item) => (
            <li className="contact-item" key={item.label}>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  {item.paths.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </svg>
              </span>
              <div>
                <span className="micro">{item.label.toLowerCase()}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                {item.note && <span className="micro contact-note">{item.note}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form glass-panel">
        {status === "sent" ? (
          <div role="status" className="contact-success">
            <span className="success-mark" aria-hidden="true">
              ✓
            </span>
            <h2>Thank You!</h2>
            <p>
              Our team will reach out within 2 hours. In the meantime, check out our <Link href="/features">features</Link>{" "}
              page.
            </p>
          </div>
        ) : (
          <>
            <h2>Request a Free Demo</h2>
            <p className="contact-sub">Fill in the details below and we&apos;ll get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={LIMITS.name}
                    autoComplete="name"
                    placeholder="Rajesh Sharma"
                    {...invalid("name")}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    maxLength={LIMITS.phone}
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    {...invalid("phone")}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={LIMITS.email}
                  autoComplete="email"
                  placeholder="rajesh@spicegarden.com"
                  {...invalid("email")}
                />
              </div>
              <div className="field">
                <label htmlFor="restaurant">Restaurant Name *</label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  required
                  maxLength={LIMITS.restaurant}
                  autoComplete="organization"
                  placeholder="Spice Garden"
                  {...invalid("restaurant")}
                />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="type">Restaurant Type *</label>
                  <select id="type" name="type" required {...invalid("type")}>
                    <option value="">Select type</option>
                    {restaurantTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="outlets">Number of Outlets</label>
                  <select id="outlets" name="outlets" {...invalid("outlets")}>
                    {outletOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Anything else?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={LIMITS.message}
                  placeholder="Tell us about your requirements..."
                  {...invalid("message")}
                />
              </div>
              <div aria-hidden="true" className="hp-field">
                <label htmlFor={HONEYPOT_FIELD}>Website</label>
                <input type="text" id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
              </div>
              {error && (
                <p id="contact-error" role="alert" className="form-error">
                  {error.message}
                  {!error.field && (
                    <>
                      {" "}
                      You can also call <a href={PHONE.href}>{PHONE.display}</a> or email{" "}
                      <a href={EMAIL.href}>{EMAIL.display}</a>.
                    </>
                  )}
                </p>
              )}
              <button
                type="submit"
                className="button"
                disabled={!hydrated || status === "sending"}
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Request Demo <span aria-hidden="true">↗</span>
                  </>
                )}
              </button>
              <p className="micro form-note">By submitting, you agree to our Privacy Policy. We won&apos;t spam you.</p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
