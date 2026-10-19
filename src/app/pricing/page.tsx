import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import PlanCard from "@/components/PlanCard";
import Reveal from "@/components/Reveal";
import { addons, plans } from "@/lib/plans";

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
      <section className="page-hero section-shell">
        <div className="hero-grid" aria-hidden="true" />
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> pricing
            </span>
            <h1>
              Simple, Transparent{" "}
              <br />
              <em>Pricing</em>
            </h1>
          </div>
          <p>
            Start free. Upgrade when you grow.{" "}
            <br />
            No hidden fees, no long-term{" "}
            <br />
            contracts.
          </p>
        </Reveal>
      </section>

      <section className="page-section section-shell" aria-labelledby="plans-heading">
        <h2 id="plans-heading" className="sr-only">
          Available Plans
        </h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} recommended={plan.featured} />
          ))}
        </div>
      </section>

      <section className="page-section section-shell" aria-labelledby="addons-heading">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> extras, when you need them
            </span>
            <h2 id="addons-heading">
              Optional{" "}
              <br />
              <em>Add-Ons</em>
            </h2>
          </div>
          <p>
            Add capabilities to any plan{" "}
            <br />
            as your restaurant grows.
          </p>
        </Reveal>
        <div className="addon-grid">
          {addons.map((addon) => (
            <Reveal as="article" className="addon-card glass-panel" key={addon.name}>
              <h3>{addon.name}</h3>
              <span className="addon-price">{addon.price}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section section-shell" aria-labelledby="faq-heading">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> good questions
            </span>
            <h2 id="faq-heading">
              Frequently Asked{" "}
              <br />
              <em>Questions</em>
            </h2>
          </div>
          <p>
            Straight answers on plans, hardware,{" "}
            <br />
            offline mode, and your data.
          </p>
        </Reveal>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <Reveal as="article" className="faq-card glass-panel" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta
        label="TALK TO US"
        title="Still Have"
        accent="Questions?"
        copy="Our team is happy to walk you through the product, help you choose the right plan, or set up a custom quote for your chain."
        primary={{ href: "/contact", label: "Talk to sales" }}
        footnote="we usually reply within 2 hours."
      />
    </>
  );
}
