import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionHead, Check, PinkCta } from "@/components/ui";

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
    step: "01 / start small",
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
    step: "02 / grow steadily",
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
    step: "03 / scale up",
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

const addons = [
  { name: "WhatsApp Business API", price: "₹499/mo" },
  { name: "Advanced CRM & Loyalty", price: "₹299/mo" },
  { name: "Self-Ordering Kiosk", price: "₹799/mo" },
  { name: "Dedicated Server Hosting", price: "₹999/mo" },
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
      <section className="relative mx-auto w-[min(1280px,88%)] pb-2 pt-20">
        <div className="hero-grid" aria-hidden="true" />
        <SectionHead
          as="h1"
          eyebrow="pricing"
          title="Simple, Transparent"
          accent="Pricing"
          aside="Start free. Upgrade when you grow. No hidden fees, no long-term contracts."
        />
      </section>

      <section className="mx-auto w-[min(1280px,88%)] pb-24" aria-labelledby="plans-heading">
        <h2 id="plans-heading" className="sr-only">
          Available Plans
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <RevealOnScroll key={plan.name} className="h-full">
              <article
                className={`glass-panel relative flex h-full flex-col p-8 ${
                  plan.highlight ? "border-primary/50 shadow-[0_0_38px_rgb(255_131_202/8%)]" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute right-5 top-5 rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] tracking-wide text-primary">
                    MOST POPULAR
                  </span>
                )}
                <span className="micro text-[#a58ba0]">{plan.step}</span>
                <h3 className="mt-4 text-[26px] font-medium tracking-[-0.02em]">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[44px] leading-none tracking-[-0.04em]">{plan.price}</span>
                  <span className="micro">{plan.period}</span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#a39aa3]">{plan.description}</p>
                <ul className="m-0 my-7 flex flex-1 list-none flex-col gap-3 border-t border-white/[0.06] p-0 pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-[#cbc2ca]">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`${plan.highlight ? "btn-primary" : "btn-glass"} w-full`}>
                  {plan.cta} <span aria-hidden="true">&#8599;</span>
                </Link>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,88%)] border-t border-white/10 py-24" aria-labelledby="addons-heading">
        <SectionHead
          eyebrow="extras, when you need them"
          title="Optional"
          accent="Add-Ons"
          aside="Add capabilities to any plan as your restaurant grows — switch them on or off whenever you like."
        />
        <h2 id="addons-heading" className="sr-only">
          Optional Add-Ons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((addon) => (
            <RevealOnScroll key={addon.name} className="h-full">
              <div className="glass-panel flex h-full flex-col justify-between gap-6 p-6">
                <p className="text-[16px] font-medium leading-[1.4]">{addon.name}</p>
                <p className="font-mono text-[15px] text-primary">{addon.price}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,88%)] border-t border-white/10 py-24" aria-labelledby="faq-heading">
        <SectionHead
          eyebrow="good questions"
          title="Frequently Asked"
          accent="Questions"
          aside="Straight answers on plans, hardware, offline mode, and data. Need more? Our team is a message away."
        />
        <h2 id="faq-heading" className="sr-only">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <RevealOnScroll key={faq.q} className="h-full">
              <div className="glass-panel h-full p-7">
                <h3 className="mb-3 text-[20px] font-medium leading-[1.3] tracking-[-0.02em]">{faq.q}</h3>
                <p className="text-[14px] leading-[1.8] text-[#a39aa3]">{faq.a}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <PinkCta
        label="TALK TO US"
        title="Still Have"
        accent="Questions?"
        primary={{ href: "/contact", label: "Talk to Sales" }}
      >
        Our team is happy to walk you through the product, help you choose the right plan, or set up a custom quote for
        your chain.
      </PinkCta>
    </>
  );
}
