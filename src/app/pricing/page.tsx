import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Affordable Restaurant POS Plans",
  description:
    "Transparent pricing for Sedulus POS restaurant software. Free Starter plan, Pro at ₹1,999/mo, and Enterprise for chains. No hidden fees, cancel anytime.",
  alternates: { canonical: "https://www.sedulus.in/pricing" },
  openGraph: {
    title: "Pricing — Sedulus POS",
    description:
      "Start free, upgrade when you grow. Plans from ₹0 to ₹4,999/month for restaurant chains.",
    url: "https://www.sedulus.in/pricing",
  },
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For new restaurants getting started with digital billing.",
    highlight: false,
    features: [
      "1 outlet, 1 device",
      "Basic POS billing",
      "KOT printing",
      "Daily sales reports",
      "GST invoicing",
      "Email support",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    description: "For growing restaurants that need full control.",
    highlight: true,
    features: [
      "1 outlet, unlimited devices",
      "Kitchen Display System (KDS)",
      "Inventory management",
      "Swiggy & Zomato integration",
      "CRM & loyalty program",
      "Table & floor management",
      "Advanced analytics & P&L",
      "WhatsApp & SMS campaigns",
      "Priority phone & chat support",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    period: "/outlet/month",
    description: "For chains and franchises with centralised management.",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited outlets",
      "Central menu & pricing control",
      "Franchise management",
      "Consolidated reporting",
      "Custom integrations & API access",
      "Dedicated account manager",
      "On-site training & setup",
      "99.99% SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    q: "Is there really a free plan?",
    a: "Yes. The Starter plan is free forever — no credit card required. It includes basic POS billing, KOT printing, and daily reports. Upgrade to Pro when you need advanced features.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. When upgrading, you only pay the prorated difference. When downgrading, the credit applies to future months.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fee for Starter and Pro plans. Enterprise plans include free on-site setup and training. There are no hidden charges — what you see is what you pay.",
  },
  {
    q: "What hardware do I need?",
    a: "Sedulus POS works on any Android tablet, iPad, Windows PC, or touchscreen terminal. We also support standard thermal printers, barcode scanners, and cash drawers.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Sedulus POS runs on your local network and continues billing even without internet. Orders and data sync to the cloud automatically when connectivity returns.",
  },
  {
    q: "How is my data protected?",
    a: "All data is encrypted in transit and at rest. We use enterprise-grade cloud infrastructure with daily backups, and your restaurant data is never shared with third parties.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Start free. Upgrade when you grow. No hidden fees, no long-term
            contracts.
          </p>
        </div>
      </section>

      <section className="py-20" aria-labelledby="plans-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="plans-heading" className="sr-only">Available Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? "border-primary shadow-xl shadow-primary/10 relative"
                    : "border-border"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-secondary">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-secondary">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{plan.description}</p>
                <Link
                  href="/contact"
                  className={`mt-8 block text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-accent mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-muted-bg" aria-labelledby="addons-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="addons-heading" className="text-2xl font-bold text-secondary text-center mb-8">
            Optional Add-Ons
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WhatsApp Business API", price: "₹499/mo" },
              { name: "Advanced CRM & Loyalty", price: "₹299/mo" },
              { name: "Self-Ordering Kiosk", price: "₹799/mo" },
              { name: "Dedicated Server Hosting", price: "₹999/mo" },
            ].map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl border border-border p-6 text-center"
              >
                <p className="font-semibold text-secondary">{addon.name}</p>
                <p className="text-primary font-bold mt-2">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Our team is happy to walk you through the product, help you choose
            the right plan, or set up a custom quote for your chain.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </>
  );
}
