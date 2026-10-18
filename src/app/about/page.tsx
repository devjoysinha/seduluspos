import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — The Team Behind Sedulus POS",
  description:
    "Sedulus Technologies builds restaurant software that works the way restaurants actually work. Founded in 2024, trusted by 15,000+ restaurants across 150+ Indian cities.",
  alternates: { canonical: "https://seduluspos.com/about" },
  openGraph: {
    title: "About Sedulus POS",
    description:
      "We're building the operating system for Indian restaurants — one that works offline, speaks Hindi, and fits a ₹100/day budget.",
    url: "https://seduluspos.com/about",
  },
};

const values = [
  {
    title: "Offline-First, Always",
    description:
      "Indian internet is unpredictable. Every feature we build works without connectivity and syncs when it can. Your restaurant never stops billing.",
  },
  {
    title: "Built for India",
    description:
      "GST from day one. Hindi and regional language support. Pricing that works for a dhaba and a five-star alike. We understand the Indian restaurant.",
  },
  {
    title: "Data is Yours",
    description:
      "We never sell or share your restaurant data. Export anything, anytime. Cancel and take everything with you — no lock-in, ever.",
  },
  {
    title: "Speed Over Everything",
    description:
      "A POS that makes your cashier wait is costing you money. Every interaction is optimised to complete in under a second.",
  },
];

const milestones = [
  { year: "2024", event: "Founded in Kolkata with a team of 5" },
  { year: "2024", event: "Launched beta with 100 restaurants" },
  { year: "2025", event: "Reached 5,000 restaurants across 50 cities" },
  { year: "2025", event: "Launched KDS and Swiggy/Zomato integrations" },
  { year: "2026", event: "15,000+ restaurants in 150+ cities" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              We&apos;re Building the OS for Indian Restaurants
            </h1>
            <p className="text-lg text-muted">
              Sedulus Technologies was born out of a simple frustration: why does
              restaurant software feel like it was built for someone else? We set
              out to build a POS that works the way Indian restaurants actually
              operate — fast, offline, multilingual, and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="mission-heading" className="text-3xl font-bold text-secondary mb-6">
                Our Mission
              </h2>
              <p className="text-muted mb-4">
                India has over 75 lakh restaurants. Most still use handwritten
                KOTs, paper bills, and mental arithmetic for inventory. We want
                to change that — not by selling expensive hardware, but by
                putting powerful software on the devices they already own.
              </p>
              <p className="text-muted">
                Our goal is simple: every restaurant in India, from a roadside
                stall to a multi-city chain, should have access to world-class
                restaurant management tools — at a price they can afford and in
                a language they speak.
              </p>
            </div>
            <div className="bg-muted-bg rounded-2xl p-8">
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-sm font-bold text-primary w-12 shrink-0">
                      {m.year}
                    </div>
                    <div className="text-sm text-secondary">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted-bg" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-3xl font-bold text-secondary text-center mb-12">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {v.title}
                </h3>
                <p className="text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Want to Join the Team?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            We&apos;re always looking for people who care about building great
            products. Check out our open positions or drop us a line.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
