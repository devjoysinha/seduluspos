import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedulus POS — Restaurant Billing & Management Software | India",
  description:
    "Sedulus POS is India's #1 restaurant POS software. Fast billing, kitchen display, inventory management, Swiggy & Zomato integration, GST-ready. Free trial for 14 days.",
  alternates: { canonical: "https://www.sedulus.in" },
};

const stats = [
  { value: "15,000+", label: "Restaurants" },
  { value: "50Cr+", label: "Orders Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Cities" },
];

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Lightning-Fast Billing",
    description:
      "Generate bills in under 3 seconds. Touch-optimised POS with smart menu search, split bills, and instant KOT printing.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Kitchen Display System",
    description:
      "Real-time order tracking for your kitchen. Colour-coded priorities, auto-routing to stations, and average prep-time analytics.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Inventory Management",
    description:
      "Auto-deduct stock on every sale. Low-stock alerts, recipe-level tracking, wastage reports, and vendor management built in.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l-3-1.5M12 12.75V7.5" />
      </svg>
    ),
    title: "Online Order Integration",
    description:
      "Accept Swiggy, Zomato, and direct website orders in one dashboard. Auto-accept, menu sync, and unified reporting.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Payment & GST Ready",
    description:
      "UPI, cards, wallets — accept every payment. Auto-generated GST invoices, GSTR-ready reports, and end-of-day reconciliation.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Track sales, top dishes, peak hours, and staff performance from any device. Daily P&L, outlet comparison, and trend reports.",
  },
];

const testimonials = [
  {
    quote:
      "We switched from manual billing to Sedulus POS and our order accuracy went from 85% to 99%. The KDS alone saved us 2 staff members.",
    name: "Rajesh Sharma",
    role: "Owner, Spice Garden — Mumbai",
  },
  {
    quote:
      "The Swiggy and Zomato integration is seamless. No more switching between tablets. Everything comes into one screen and goes straight to the kitchen.",
    name: "Priya Menon",
    role: "Manager, Curry Leaf — Bangalore",
  },
  {
    quote:
      "Inventory tracking caught a consistent leak in our dal consumption. Turned out a staff member was over-portioning. Saved us 40K per month.",
    name: "Amit Patel",
    role: "Owner, Patel's Dhaba — Ahmedabad",
  },
];

const integrations = [
  "Swiggy",
  "Zomato",
  "Paytm",
  "PhonePe",
  "Google Pay",
  "Razorpay",
  "Tally",
  "WhatsApp Business",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-light to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-dark mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Trusted by 15,000+ restaurants across India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary leading-tight">
                Your Restaurant,{" "}
                <span className="text-primary">Simplified.</span>
              </h1>
              <p className="mt-6 text-lg text-muted max-w-lg">
                From billing to kitchen to delivery — Sedulus POS handles it all.
                The complete restaurant management platform that works even when
                the internet doesn&apos;t.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Start 14-Day Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-secondary px-8 py-3.5 text-center text-base font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors"
                >
                  Request a Demo
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">
                No credit card required &middot; Setup in 15 minutes &middot; Cancel anytime
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#4B0F1E] to-[#6D1D32] p-3 shadow-2xl">
                <Image
                  src="/screenshots/pos-billing.jpg"
                  alt="Sedulus POS billing interface showing menu items, order management, and dine-in billing"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary">Order #1247</p>
                    <p className="text-xs text-muted">Bill generated in 2.3s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-10" aria-label="Statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#E07A94]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28" id="features" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Everything You Need
            </p>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-secondary">
              One Platform. Every Restaurant Need.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whether you run a single outlet or a chain of 100, Sedulus POS
              scales with you — from billing to analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              See all features
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted-bg" aria-labelledby="showcase-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              See It In Action
            </p>
            <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-secondary">
              Built for Real Restaurant Operations
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every screen is designed by restaurant owners, for restaurant owners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/screenshots/dashboard.jpg"
                  alt="Restaurant dashboard showing daily sales, active orders, and live order pulse"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Owner Dashboard</h3>
              <p className="text-sm text-muted">Real-time sales, active orders, and performance metrics at a glance.</p>
            </div>
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/screenshots/kitchen-display.jpg"
                  alt="Kitchen display system showing active KOTs with preparation status"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Kitchen Display System</h3>
              <p className="text-sm text-muted">Live KOTs with priority tracking, station routing, and one-tap ready marking.</p>
            </div>
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/screenshots/tables.jpg"
                  alt="Floor management showing table status with occupied, available, and reserved indicators"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Table & Floor Management</h3>
              <p className="text-sm text-muted">Visual floor plan with live table status, multi-floor support, and reservations.</p>
            </div>
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/screenshots/orders.jpg"
                  alt="Order history showing today's orders with type, time, status and amounts"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Order History & Reports</h3>
              <p className="text-sm text-muted">Complete order trail with filtering, status tracking, and instant reconciliation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted-bg" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Get Started in Minutes
            </p>
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-secondary">
              Up and Running in 3 Simple Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Customer Stories
            </p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-secondary">
              Loved by Restaurant Owners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-muted-bg p-8 relative"
              >
                <svg className="h-8 w-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>
                <p className="text-muted leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-secondary">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted-bg" aria-labelledby="integrations-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Integrations
            </p>
            <h2 id="integrations-heading" className="text-3xl md:text-4xl font-bold text-secondary">
              Works With Tools You Already Use
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name) => (
              <div
                key={name}
                className="rounded-xl bg-white border border-border px-6 py-4 text-sm font-medium text-secondary shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-12 md:p-16 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Join 15,000+ restaurants already using Sedulus POS. Start your free
              14-day trial today — no credit card, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary hover:bg-[#fdf2f4] transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
