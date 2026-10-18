import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — Restaurant POS, KDS, Inventory & Online Orders",
  description:
    "Explore Sedulus POS features: lightning-fast billing, kitchen display system, real-time inventory, Swiggy & Zomato integration, table management, CRM, GST invoicing, and multi-outlet analytics.",
  alternates: { canonical: "https://seduluspos.com/features" },
  openGraph: {
    title: "Features — Sedulus POS Restaurant Software",
    description:
      "Everything your restaurant needs in one platform — billing, KDS, inventory, online orders, analytics and more.",
    url: "https://seduluspos.com/features",
  },
};

const featureCategories = [
  {
    id: "billing",
    category: "Point of Sale",
    title: "Billing That Keeps Up With Rush Hour",
    description:
      "Designed for speed. Your cashier can punch a 20-item order in under 30 seconds with our touch-first interface.",
    screenshot: "/screenshots/pos-billing.jpg",
    screenshotAlt: "POS billing interface with menu grid, order builder, and dine-in/takeaway modes",
    features: [
      "Touch-optimised menu grid with smart search",
      "Split bills, merge tables, custom discounts",
      "Multiple payment modes in a single bill",
      "Instant KOT & bill printing via thermal printers",
      "Dine-in, takeaway, delivery & drive-through modes",
      "Customer-facing display for order verification",
    ],
  },
  {
    id: "kds",
    category: "Kitchen Display System",
    title: "Your Kitchen, Fully Connected",
    description:
      "Replace paper KOTs with a real-time kitchen display. Orders appear the moment they're placed — colour-coded by urgency.",
    screenshot: "/screenshots/kitchen-display.jpg",
    screenshotAlt: "Kitchen display with live KOTs, preparation status, and mark-ready controls",
    features: [
      "Station-wise routing (grill, bar, tandoor, etc.)",
      "Colour-coded order priority and SLA timers",
      "Bump-bar or touch to mark items ready",
      "Average prep time analytics per dish",
      "Multi-screen support for large kitchens",
      "Offline-capable — works on local network",
    ],
  },
  {
    id: "inventory",
    category: "Inventory & Stock",
    title: "Know Every Gram That Enters and Leaves",
    description:
      "Recipe-level ingredient tracking means you know exactly what each dish costs and where wastage happens.",
    screenshot: "/screenshots/menu.jpg",
    screenshotAlt: "Menu management with item categories, pricing, and availability controls",
    features: [
      "Auto stock deduction on every sale",
      "Recipe management with ingredient mapping",
      "Low-stock alerts via SMS & WhatsApp",
      "Purchase orders & vendor management",
      "Wastage and variance reports",
      "Multi-warehouse / multi-outlet stock transfers",
    ],
  },
  {
    id: "integrations",
    category: "Online Orders & Integrations",
    title: "All Your Orders in One Place",
    description:
      "Swiggy, Zomato, your own website — every order lands on the same screen and routes to the kitchen automatically.",
    screenshot: "/screenshots/orders.jpg",
    screenshotAlt: "Unified order dashboard showing all order types, statuses, and amounts",
    features: [
      "Swiggy & Zomato auto-accept with menu sync",
      "Self-ordering website & QR menu",
      "WhatsApp ordering for direct customers",
      "Unified dashboard for all channels",
      "Real-time menu availability sync",
      "Commission and payout tracking",
    ],
  },
  {
    id: "crm",
    category: "CRM & Loyalty",
    title: "Turn First-Timers Into Regulars",
    description:
      "Build a customer database automatically. Run targeted campaigns, loyalty programs, and feedback collection.",
    features: [
      "Auto-capture customer details from bills",
      "Points-based loyalty program",
      "Birthday & anniversary auto-offers",
      "SMS & WhatsApp campaign manager",
      "Customer feedback collection post-bill",
      "RFM segmentation for targeted offers",
    ],
  },
  {
    id: "analytics",
    category: "Reports & Analytics",
    title: "Data-Driven Decisions, Every Day",
    description:
      "From a daily P&L to hourly sales heatmaps — everything you need to optimise operations and grow revenue.",
    screenshot: "/screenshots/dashboard.jpg",
    screenshotAlt: "Analytics dashboard with sales figures, order stats, and live performance metrics",
    features: [
      "Real-time sales dashboard on mobile",
      "Outlet-wise comparison for chains",
      "Top-selling & slow-moving item analysis",
      "Staff performance & attendance reports",
      "GST-ready tax reports & GSTR filing",
      "Custom report builder with Excel export",
    ],
  },
  {
    id: "table",
    category: "Table & Floor Management",
    title: "Manage Every Table, Every Floor",
    description:
      "Visual floor plan with real-time table status. Know which tables are occupied, reserved, or about to turn over.",
    screenshot: "/screenshots/tables.jpg",
    screenshotAlt: "Floor plan with colour-coded table status showing occupied, available, and reserved tables",
    features: [
      "Drag-and-drop floor plan editor",
      "Real-time table status with time tracking",
      "Reservation management with caller ID",
      "Table merge, split, and transfer",
      "Waitlist management with SMS notifications",
      "Average table turn time analytics",
    ],
  },
  {
    id: "multioutlet",
    category: "Multi-Outlet Management",
    title: "One Dashboard for All Your Outlets",
    description:
      "Manage menus, pricing, staff, and promotions across outlets centrally while keeping outlet-level autonomy.",
    features: [
      "Centralised menu management",
      "Outlet-specific pricing & tax rules",
      "Role-based access for outlet managers",
      "Consolidated P&L across outlets",
      "Central purchase & vendor management",
      "Franchise management tools",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Features
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Everything Your Restaurant Needs
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From a single-counter chai stall to a 50-outlet chain — Sedulus POS
            adapts to your business. Explore every capability below.
          </p>
        </div>
      </section>

      <nav className="sticky top-16 z-40 bg-white border-b border-border overflow-x-auto" aria-label="Feature categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-3 min-w-max">
            {featureCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-sm font-medium text-muted hover:text-primary whitespace-nowrap transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {featureCategories.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${index % 2 === 1 ? "bg-muted-bg" : ""}`}
          aria-labelledby={`${cat.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {cat.category}
                </p>
                <h2 id={`${cat.id}-heading`} className="text-3xl font-bold text-secondary mb-4">
                  {cat.title}
                </h2>
                <p className="text-muted mb-8">{cat.description}</p>
                <ul className="space-y-3">
                  {cat.features.map((f) => (
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
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                {cat.screenshot ? (
                  <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                    <Image
                      src={cat.screenshot}
                      alt={cat.screenshotAlt || cat.category}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F7D6DC] to-[#f0c4cc] border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-muted">{cat.category}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See It in Action
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Book a free 20-minute demo and see how Sedulus POS fits your
              restaurant — no sales pitch, just the product.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary hover:bg-[#fdf2f4] transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
