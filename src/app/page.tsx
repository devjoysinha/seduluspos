import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionHead, Check, Shot } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sedulus POS — Restaurant Billing & Management Software | India",
  description:
    "Sedulus POS is India's #1 restaurant POS software. Fast billing, kitchen display, inventory management, Swiggy & Zomato integration, GST-ready. Free trial for 14 days.",
  alternates: { canonical: "https://www.sedulus.in" },
};

const integrations = [
  { name: "Swiggy", mark: "Sw" },
  { name: "Zomato", mark: "Z" },
  { name: "Paytm", mark: "Pt" },
  { name: "PhonePe", mark: "Pe" },
  { name: "Google Pay", mark: "GP" },
  { name: "Razorpay", mark: "Rp" },
  { name: "Tally", mark: "Ta" },
  { name: "WhatsApp Business", mark: "WA" },
];

const capabilities = [
  {
    title: "Inventory Management",
    description:
      "Auto-deduct stock on every sale. Low-stock alerts, recipe-level tracking, wastage reports, and vendor management built in.",
    path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Online Order Integration",
    description:
      "Accept Swiggy, Zomato, and direct website orders in one dashboard. Auto-accept, menu sync, and unified reporting.",
    path: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l-3-1.5M12 12.75V7.5",
  },
  {
    title: "Payment & GST Ready",
    description:
      "UPI, cards, wallets — accept every payment. Auto-generated GST invoices, GSTR-ready reports, and end-of-day reconciliation.",
    path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
];

const steps = [
  {
    step: "01",
    title: "Sign Up & Setup Menu",
    description:
      "Create your account, upload your menu via Excel or add items manually. Our team helps migrate your existing data.",
  },
  {
    step: "02",
    title: "Configure & Train",
    description:
      "Set up tables, printers, KDS screens, and staff roles. Our trainers get your team comfortable in under an hour.",
  },
  {
    step: "03",
    title: "Go Live & Grow",
    description:
      "Start taking orders. Connect Swiggy, Zomato, and payment gateways. Monitor everything from the owner dashboard.",
  },
];

const stats = [
  { value: "15,000+", label: "restaurants", note: "from single outlets to chains" },
  { value: "50Cr+", label: "orders processed", note: "dine-in, takeaway and delivery" },
  { value: "99.9%", label: "uptime", note: "keeps billing even offline" },
  { value: "150+", label: "cities", note: "across india" },
];

const testimonials = [
  {
    quote:
      "We switched from manual billing to Sedulus POS and our order accuracy went from 85% to 99%. The KDS alone saved us 2 staff members.",
    name: "Rajesh Sharma",
    role: "Owner, Spice Garden — Mumbai",
    initials: "RS",
  },
  {
    quote:
      "The Swiggy and Zomato integration is seamless. No more switching between tablets. Everything comes into one screen and goes straight to the kitchen.",
    name: "Priya Menon",
    role: "Manager, Curry Leaf — Bangalore",
    initials: "PM",
  },
  {
    quote:
      "Inventory tracking caught a consistent leak in our dal consumption. Turned out a staff member was over-portioning. Saved us 40K per month.",
    name: "Amit Patel",
    role: "Owner, Patel's Dhaba — Ahmedabad",
    initials: "AP",
  },
];

const plans = [
  {
    step: "01 / start small",
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For new restaurants getting started with digital billing.",
    features: ["1 outlet, 1 device", "Basic POS billing", "KOT printing", "GST invoicing"],
    cta: "Get Started Free",
    featured: false,
  },
  {
    step: "02 / grow steadily",
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    description: "For growing restaurants that need full control.",
    features: [
      "1 outlet, unlimited devices",
      "Kitchen Display System (KDS)",
      "Inventory management",
      "Swiggy & Zomato integration",
    ],
    cta: "Start 14-Day Free Trial",
    featured: true,
  },
  {
    step: "03 / scale up",
    name: "Enterprise",
    price: "₹4,999",
    period: "/outlet/month",
    description: "For chains and franchises with centralised management.",
    features: [
      "Everything in Pro",
      "Unlimited outlets",
      "Central menu & pricing control",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const traceRows = [
  { label: "Menu selection", bar: "76%", time: "1.2s" },
  { label: "KOT generated", bar: "21%", time: "0.3s" },
  { label: "Kitchen notified", bar: "43%", time: "0.5s" },
  { label: "Bill printed", bar: "57%", time: "0.3s" },
];

const bars = [
  { day: "mon", h: 52 },
  { day: "tue", h: 66 },
  { day: "wed", h: 61 },
  { day: "thu", h: 88 },
  { day: "fri", h: 118 },
  { day: "sat", h: 148, pink: true },
  { day: "sun", h: 126 },
];

function FeatureCopy({
  index,
  label,
  title,
  link,
  className = "",
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  link?: { href: string; label: string };
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`max-w-[380px] ${className}`}>
      <span className="micro mb-5 block text-[#a58ba0]">
        {index} / {label}
      </span>
      <h3 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-[-0.04em]">{title}</h3>
      <p className="text-[15px] leading-[1.8] text-[#a39aa3]">{children}</p>
      {link && (
        <Link
          href={link.href}
          className="mt-6 inline-flex items-center gap-3 text-[14px] text-[#ddd7dd] transition-colors hover:text-primary"
        >
          {link.label} <span className="text-primary" aria-hidden="true">&#8599;</span>
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="relative mx-auto w-[min(1280px,88%)]">
        <div className="hero-grid" aria-hidden="true" />
        <div className="grid items-center gap-14 pb-24 pt-16 md:min-h-[820px] md:grid-cols-[.9fr_1.1fr] md:gap-6">
          <div className="relative z-[2]">
            <span className="eyebrow mb-8 flex w-fit rounded-[4px]">
              <span className="status-dot" /> trusted by 15,000+ restaurants across india
            </span>
            <h1 className="text-[clamp(46px,5.2vw,76px)] font-medium leading-[1.04] tracking-[-0.057em]">
              Your Restaurant,
              <br />
              <em className="inline-block pb-2 text-[1.11em] leading-[.98] tracking-[-0.045em] text-[#f3e9f1]">
                Simplified.
              </em>
            </h1>
            <p className="mb-9 mt-7 max-w-[470px] text-[16px] leading-[1.75] text-[#a8a2a7]">
              From billing to kitchen to delivery — Sedulus POS handles it all. The complete restaurant management
              platform that works even when the internet doesn&apos;t.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start 14-Day Free Trial <span aria-hidden="true">&#8599;</span>
              </Link>
              <Link href="/contact" className="btn-glass">
                Request a Demo
              </Link>
            </div>
            <p className="mt-5 font-mono text-[11px] leading-[1.7] text-[#8a8590]">
              no credit card required / setup in 15 minutes / cancel anytime
            </p>
          </div>

          <div className="relative min-w-0" style={{ perspective: 1200 }}>
            <div className="window-aura" aria-hidden="true" />
            <div className="workflow-window">
              <div
                className="flex min-h-[54px] items-center justify-between gap-3 border-b border-white/[0.06] px-5"
                style={{ borderRadius: "14px 14px 0 0" }}
              >
                <div className="flex items-center gap-2.5 text-[13px] text-[#bfb7c0]">
                  <span className="font-mono text-[13px] text-primary">s/</span>
                  <span>POS Billing</span>
                  <span className="mx-0.5 hidden h-3 w-px bg-[#49414c] sm:block" />
                  <span className="micro hidden text-[#a294a5] sm:inline">live view</span>
                </div>
                <span className="micro flex items-center gap-1.5 text-primary-light">
                  <span className="status-dot" /> order in progress
                </span>
              </div>
              <Image
                src="/screenshots/pos-billing.jpg"
                alt="Sedulus POS billing interface showing menu items, order management, and dine-in billing"
                width={800}
                height={600}
                sizes="(min-width: 768px) 55vw, 92vw"
                className="block h-auto w-full"
                priority
              />
              <div
                className="micro flex min-h-[38px] items-center justify-between border-t border-white/[0.06] px-5 text-[#8d8294]"
                style={{ borderRadius: "0 0 14px 14px" }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="status-dot" style={{ width: 4, height: 4 }} /> live workspace
                </span>
                <span>B-1247</span>
              </div>
            </div>

            <div className="absolute -bottom-7 left-[8%] z-[3] flex items-center gap-3 rounded-[10px] border border-primary/30 bg-[#1b131e] px-4 py-3 shadow-[0_15px_40px_rgb(0_0_0/45%)] md:left-[14%]">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-primary/30 bg-primary/[0.07] text-primary">
                <Check />
              </span>
              <div>
                <strong className="mb-0.5 block text-[13px] font-medium">Order #1247</strong>
                <span className="micro">Bill generated in 2.3s</span>
              </div>
            </div>
          </div>
        </div>

        <RevealOnScroll>
          <div className="border-t border-white/10 pt-6">
            <div className="micro mb-6 flex items-center justify-between gap-4">
              <span>your tools, already on speaking terms.</span>
              <Link href="/features#integrations" className="transition-colors hover:text-primary">
                and whatever&apos;s next. <span className="text-primary" aria-hidden="true">&#8599;</span>
              </Link>
            </div>
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-9 gap-y-5 p-0">
              {integrations.map((app) => (
                <li key={app.name} className="flex items-center gap-2.5 text-[14px] text-[#a39ca3]">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.09] bg-white/[0.03] text-[12px] font-semibold text-[#c8bfc9]"
                    style={{ boxShadow: "inset 0 1px rgb(255 255 255 / 3%)" }}
                    aria-hidden="true"
                  >
                    {app.mark}
                  </span>
                  {app.name}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto mt-28 w-[min(1280px,88%)] border-t border-white/10 pt-28">
        <SectionHead
          eyebrow="from order to kitchen to table"
          title="Less juggling."
          accent="More serving."
          aside="Every order, every table, every kitchen station — connected in real time. Set it up once, and let your restaurant run smoother."
        />

        <RevealOnScroll>
          <article className="grid items-center gap-10 py-14 md:grid-cols-[.8fr_1fr] md:gap-[10%]">
            <FeatureCopy
              index="01"
              label="lightning-fast billing"
              title={
                <>
                  Bill in seconds.
                  <br />
                  Not minutes.
                </>
              }
              link={{ href: "/features", label: "See billing features" }}
            >
              Generate bills in under 3 seconds. Touch-optimised POS with smart menu search, split bills, and instant KOT
              printing.
            </FeatureCopy>
            <div
              role="img"
              aria-label="Sample billing trace for one order: menu selection, KOT generated, kitchen notified, bill printed"
              className="glass-panel p-7"
            >
              <div className="micro mb-2 flex items-center justify-between border-b border-white/[0.06] pb-5">
                <span className="flex items-center gap-2">
                  <span className="status-dot" style={{ width: 4, height: 4 }} /> order B-1247
                </span>
                <span>billing trace / sample</span>
              </div>
              {traceRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[14px_minmax(104px,150px)_1fr_40px] items-center gap-3 border-b border-white/[0.04] py-3.5 font-mono text-[12px] text-[#d2c9d2]"
                >
                  <Check className="h-3 w-3 text-[#bb87a9]" />
                  <span>{row.label}</span>
                  <div className="trace-rail">
                    <span style={{ width: row.bar }} />
                  </div>
                  <span className="micro text-right text-[#8d8294]">{row.time}</span>
                </div>
              ))}
              <div className="micro mt-3 flex justify-between border-t border-white/[0.06] pt-4 text-[#8d8294]">
                <span>every step accounted for.</span>
                <span>2.3s total</span>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <article className="grid items-center gap-10 py-14 md:grid-cols-[1fr_.8fr] md:gap-[10%]">
            <FeatureCopy
              className="md:order-2"
              index="02"
              label="kitchen display system"
              title={
                <>
                  Your kitchen.
                  <br />
                  Always in sync.
                </>
              }
              link={{ href: "/features#kds", label: "Explore the kitchen display" }}
            >
              Real-time order tracking for your kitchen. Colour-coded priorities, auto-routing to stations, and average
              prep-time analytics.
            </FeatureCopy>
            <div className="md:order-1">
              <Shot
                label="kitchen"
                status="live"
                src="/screenshots/kitchen-display.jpg"
                alt="Kitchen display system showing active KOTs with preparation status"
                sizes="(min-width: 768px) 50vw, 92vw"
              />
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <article className="grid items-center gap-10 py-14 md:grid-cols-[.8fr_1fr] md:gap-[10%]">
            <FeatureCopy
              index="03"
              label="real-time analytics"
              title={
                <>
                  Every sale leaves
                  <br />
                  a clear paper trail.
                </>
              }
              link={{ href: "/features", label: "See reporting features" }}
            >
              Track sales, top dishes, peak hours, and staff performance from any device. Daily P&amp;L, outlet
              comparison, and trend reports.
            </FeatureCopy>
            <div
              role="img"
              aria-label="Sample bar chart of daily revenue across a week, peaking on Saturday"
              className="glass-panel p-6 pb-5"
            >
              <div className="micro flex items-center justify-between">
                <span>daily revenue, this week</span>
                <span>
                  <span className="text-primary">+24.8%</span> vs last week
                </span>
              </div>
              <div className="flex h-[230px] items-end justify-around px-2 pb-9 pt-6" style={{ perspective: 600 }}>
                {bars.map((bar) => (
                  <div key={bar.day} className="relative flex h-full w-[10%] items-end justify-center">
                    <div className={`column-3d w-full ${bar.pink ? "column-pink" : ""}`} style={{ height: bar.h }} />
                    <span className="micro absolute inset-x-0 text-center" style={{ top: "calc(100% + 12px)" }}>
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="micro flex justify-between pt-4 text-[#8d8294]">
                <span>sample workspace / last 7 days</span>
                <span>₹4,28,640</span>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {capabilities.map((item) => (
            <RevealOnScroll key={item.title} className="h-full">
              <article className="glass-panel h-full p-7">
                <span className="mb-6 grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/[0.07] text-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={item.path} />
                  </svg>
                </span>
                <h3 className="mb-3 text-[21px] font-medium tracking-[-0.025em]">{item.title}</h3>
                <p className="text-[14px] leading-[1.8] text-[#a39aa3]">{item.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* WORKSPACE */}
      <section id="workspace" className="mx-auto w-[min(1280px,88%)] pb-28 pt-28">
        <SectionHead
          eyebrow="a working view, not a brochure"
          title="Built for real"
          accent="restaurant operations."
          aside="Real screens from the product, not mock-ups. What you see here is exactly what your staff uses on the floor."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <RevealOnScroll className="h-full md:col-span-2">
            <Shot
              label="dashboard"
              status="today"
              src="/screenshots/dashboard.jpg"
              alt="Restaurant dashboard showing daily sales, active orders, and live order pulse"
              sizes="(min-width: 768px) 60vw, 92vw"
            />
          </RevealOnScroll>

          <RevealOnScroll className="h-full">
            <div className="glass-panel flex h-full min-h-[280px] flex-col items-center justify-center p-6 text-center">
              <span className="micro mb-5">offline-ready uptime</span>
              <div className="relative h-[150px] w-[150px]">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle className="donut-track" cx="60" cy="60" r="47" />
                  <circle className="donut-fill" cx="60" cy="60" r="47" />
                </svg>
                <strong className="absolute inset-0 flex items-center justify-center text-[34px] font-normal tracking-[-0.04em]">
                  99.9<span className="pt-1 text-[18px]">%</span>
                </strong>
              </div>
              <p className="micro mt-5 max-w-[200px]">works even when the internet doesn&apos;t.</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="h-full">
            <Shot
              label="tables"
              status="floor view"
              src="/screenshots/tables.jpg"
              alt="Floor management showing table status"
              sizes="(min-width: 768px) 30vw, 92vw"
            />
          </RevealOnScroll>
          <RevealOnScroll className="h-full">
            <Shot
              label="orders"
              status="today"
              src="/screenshots/orders.jpg"
              alt="Order history showing today's orders"
              sizes="(min-width: 768px) 30vw, 92vw"
            />
          </RevealOnScroll>
          <RevealOnScroll className="h-full">
            <Shot
              label="menu"
              status="catalogue"
              src="/screenshots/menu.jpg"
              alt="Menu management interface"
              sizes="(min-width: 768px) 30vw, 92vw"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS */}
      <RevealOnScroll>
        <section className="mx-auto w-[min(1280px,88%)] border-y border-white/10 py-14">
          <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="micro text-[#a58ba0]">{stat.label}</dt>
                <dd className="m-0">
                  <strong className="mb-2 mt-3 block text-[clamp(38px,4.4vw,60px)] font-normal leading-[1.15] tracking-[-0.04em]">
                    {stat.value}
                  </strong>
                  <span className="micro block">{stat.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </RevealOnScroll>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto w-[min(1280px,88%)] pb-8 pt-28">
        <SectionHead
          eyebrow="up and running"
          title="Up and running in"
          accent="3 simple steps."
          aside="From sign-up to your first bill, our team helps with menu migration and staff training along the way."
        />
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          {steps.map((item) => (
            <li key={item.step} className="h-full">
              <RevealOnScroll className="h-full">
                <div className="glass-panel h-full p-7">
                  <span className="block text-[56px] italic leading-none text-primary/80" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {item.step}
                  </span>
                  <h3 className="mb-3 mt-6 text-[22px] font-medium tracking-[-0.025em]">{item.title}</h3>
                  <p className="text-[14px] leading-[1.8] text-[#a39aa3]">{item.description}</p>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="mx-auto w-[min(1280px,88%)] pb-28 pt-24">
        <SectionHead
          eyebrow="in their words"
          title="Owners who run"
          accent="busy kitchens."
          aside="Feedback from restaurant owners and managers using Sedulus POS every day."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealOnScroll key={t.name} className="h-full">
              <figure className="glass-panel m-0 flex h-full flex-col justify-between gap-10 p-7">
                <div>
                  <span className="mb-3 block text-[56px] leading-[.6] text-primary" style={{ fontFamily: "var(--font-playfair), serif" }} aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="m-0 text-[19px] leading-[1.55] tracking-[-0.01em] text-[#ebe5eb]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-[13px] font-semibold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <strong className="block text-[14px] font-medium">{t.name}</strong>
                    <span className="micro">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto w-[min(1280px,88%)] border-t border-white/10 pb-24 pt-28">
        <SectionHead
          eyebrow="simple, transparent pricing"
          title="More features."
          accent="Not a bigger bill."
          aside="Start free. Upgrade when you grow. No hidden fees, no long-term contracts."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <RevealOnScroll key={plan.name} className="h-full">
              <article
                className={`glass-panel relative flex h-full flex-col p-7 ${
                  plan.featured ? "border-primary/50 shadow-[0_0_38px_rgb(255_131_202/8%)]" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] tracking-wide text-primary">
                    MOST POPULAR
                  </span>
                )}
                <span className="micro text-[#a58ba0]">{plan.step}</span>
                <h3 className="mt-4 text-[24px] font-medium tracking-[-0.02em]">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[40px] leading-none tracking-[-0.04em]">{plan.price}</span>
                  <span className="micro">{plan.period}</span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#a39aa3]">{plan.description}</p>
                <ul className="m-0 my-6 flex flex-1 list-none flex-col gap-3 p-0">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[14px] text-[#cbc2ca]">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`${plan.featured ? "btn-primary" : "btn-glass"} w-full`}>
                  {plan.cta} <span aria-hidden="true">&#8599;</span>
                </Link>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <p className="micro mt-6 text-center">
          <Link href="/pricing" className="text-[#c8bfc9] transition-colors hover:text-primary">
            compare every feature and add-on <span className="text-primary" aria-hidden="true">&#8599;</span>
          </Link>
        </p>
      </section>

      {/* CLOSING CTA */}
      <RevealOnScroll>
        <section className="mx-auto grid w-[min(1280px,88%)] gap-5 pb-24 pt-6 md:grid-cols-[.75fr_1fr]">
          <div className="glass-panel relative flex min-h-[300px] flex-col justify-between overflow-hidden p-8">
            <Link href="/" className="inline-flex w-fit items-center gap-2.5 text-[18px] font-semibold tracking-[-0.6px]">
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-[9px] text-sm font-bold text-[#160a12]"
                style={{ background: "var(--pink)", boxShadow: "inset 0 1px 2px rgb(255 255 255 / 55%)" }}
              >
                S
              </span>
              Sedulus POS
            </Link>
            <div className="relative z-[1]">
              <p className="text-[19px] leading-[1.4] tracking-[-0.3px]">
                Good restaurants deserve
                <br />a smarter system.
              </p>
              <span className="micro mt-4 block">built for the space between your kitchen and your counter.</span>
            </div>
            <div className="absolute right-[12%] top-[26%] flex gap-2" style={{ transform: "rotate(-24deg)" }} aria-hidden="true">
              {[74, 103, 62].map((h, i) => (
                <span
                  key={h}
                  className="w-4 rounded-md"
                  style={{
                    height: h,
                    marginTop: i === 1 ? -15 : i === 2 ? 7 : 0,
                    background: "linear-gradient(90deg, #372b37, #564050 50%, #211b24)",
                    boxShadow: "4px 4px 0 #160f17",
                    transform: "skewY(-28deg)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[15px] border border-[#ffa4d8] bg-primary p-8 text-[#291020] md:px-10 md:py-9">
            <span className="mono block text-[11px] tracking-wide text-[#5a1c41]">14-DAY FREE TRIAL</span>
            <h2 className="mb-4 mt-5 text-[clamp(32px,3.6vw,48px)] font-medium leading-[1.08] tracking-[-0.045em]">
              Ready to transform
              <br />
              <em className="text-[1.1em]">your restaurant?</em>
            </h2>
            <p className="mb-8 max-w-[440px] text-[15px] leading-[1.7] text-[#4a1735]">
              Join 15,000+ restaurants already using Sedulus POS. Start your free 14-day trial today — no credit card, no
              commitment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-4 rounded-full bg-[#100b10] px-7 text-[14px] font-semibold text-[color:var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Start Free Trial <span aria-hidden="true">&#8599;</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#291020]/35 px-7 text-[14px] font-semibold text-[#291020] transition-colors hover:bg-[#291020]/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
