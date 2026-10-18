"use client";

import { useState } from "react";
import type { Metadata } from "next";

const contactMetadata = {
  title: "Contact Us — Get a Demo or Start Free Trial",
  description:
    "Request a free demo, start your 14-day trial, or talk to our sales team. Call +91-9876543210 or fill out the form and we'll get back within 2 hours.",
};

const restaurantTypes = [
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-white via-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Let&apos;s Set Up Your Restaurant
              </h1>
              <p className="text-lg text-muted mb-8">
                Fill in the form and our product specialist will reach out within
                2 hours to schedule your free demo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Call Us</p>
                    <p className="text-muted">+91-9876543210</p>
                    <p className="text-sm text-muted">Mon — Sat, 9 AM to 8 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Email</p>
                    <p className="text-muted">hello@sedulus.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Office</p>
                    <p className="text-muted">Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-secondary mb-2">
                    Thank You!
                  </h2>
                  <p className="text-muted">
                    Our team will reach out within 2 hours. In the meantime,
                    check out our{" "}
                    <a href="/features" className="text-primary font-medium">
                      features
                    </a>{" "}
                    page.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-secondary mb-1">
                    Request a Free Demo
                  </h2>
                  <p className="text-sm text-muted mb-4">
                    Fill in the details below and we&apos;ll get back to you shortly.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="Rajesh Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="rajesh@spicegarden.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-secondary mb-1">
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Spice Garden"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-secondary mb-1">
                        Restaurant Type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                      >
                        <option value="">Select type</option>
                        {restaurantTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="outlets" className="block text-sm font-medium text-secondary mb-1">
                        Number of Outlets
                      </label>
                      <select
                        id="outlets"
                        name="outlets"
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                      >
                        <option value="1">1</option>
                        <option value="2-5">2 — 5</option>
                        <option value="6-20">6 — 20</option>
                        <option value="20+">20+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                      Anything else?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    Request Demo
                  </button>
                  <p className="text-xs text-muted text-center">
                    By submitting, you agree to our Privacy Policy. We won&apos;t
                    spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
