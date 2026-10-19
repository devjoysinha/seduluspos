import type { Metadata } from "next";
import Image from "next/image";
import ClosingCta from "@/components/ClosingCta";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";

export const metadata: Metadata = {
  title: "Features — Restaurant POS, KDS, Inventory & Online Orders",
  description:
    "Explore Sedulus POS features: lightning-fast billing, kitchen display system, real-time inventory, Swiggy & Zomato integration, table management, CRM, GST invoicing, and multi-outlet analytics.",
  alternates: { canonical: "https://www.sedulus.in/features" },
  openGraph: {
    title: "Features — Sedulus POS Restaurant Software",
    description:
      "Everything your restaurant needs in one platform — billing, KDS, inventory, online orders, analytics and more.",
    url: "https://www.sedulus.in/features",
  },
};

const featureCategories: {
  id: string;
  category: string;
  title: string;
  description: string;
  screenshot?: string;
  screenshotAlt?: string;
  icon?: string;
  features: string[];
}[] = [
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
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
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
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
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
      <section className="page-hero section-shell">
        <div className="hero-grid" aria-hidden="true" />
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> features
            </span>
            <h1>
              Everything Your{" "}
              <br />
              <em>Restaurant Needs</em>
            </h1>
          </div>
          <p>
            From a single-counter chai stall to a 50-outlet chain, Sedulus POS adapts to your business. Explore every
            capability below.
          </p>
        </Reveal>
      </section>

      <nav className="feature-nav" aria-label="Feature categories">
        <div className="feature-nav-inner">
          <ul>
            {featureCategories.map((cat) => (
              <li key={cat.id}>
                <a href={`#${cat.id}`}>{cat.category}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="page-section section-shell">
        {featureCategories.map((cat, index) => {
          const reverse = index % 2 === 1;
          const copy = (
            <div className="feature-copy">
              <span className="micro step-number">
                {String(index + 1).padStart(2, "0")} / {cat.category.toLowerCase()}
              </span>
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
              <ul className="feature-list">
                {cat.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          );
          const visual = cat.screenshot ? (
            <Tilt className="shot-panel glass-panel">
              <div className="panel-heading micro">
                <span>
                  <span className="status-dot" /> {cat.id}
                </span>
                <span>live view</span>
              </div>
              <Image
                src={cat.screenshot}
                alt={cat.screenshotAlt ?? cat.category}
                width={800}
                height={600}
                sizes="(min-width: 1000px) 45vw, 92vw"
              />
            </Tilt>
          ) : (
            <Tilt className="icon-panel glass-panel">
              <div>
                <span className="icon-panel-mark">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={cat.icon} />
                  </svg>
                </span>
                <span className="micro">{cat.category}</span>
              </div>
            </Tilt>
          );
          return (
            <Reveal
              as="article"
              id={cat.id}
              key={cat.id}
              className={`feature-row feature-block${reverse ? " feature-row--reverse" : ""}`}
            >
              {reverse ? (
                <>
                  {visual}
                  {copy}
                </>
              ) : (
                <>
                  {copy}
                  {visual}
                </>
              )}
            </Reveal>
          );
        })}
      </div>

      <ClosingCta
        label="FREE DEMO"
        title="See It in"
        accent="Action"
        copy="Book a free 20-minute demo and see how Sedulus POS fits your restaurant — no sales pitch, just the product."
        primary={{ href: "/contact", label: "Book free demo" }}
        secondary={{ href: "/pricing", label: "View pricing" }}
        footnote="twenty minutes. just the product."
      />
    </>
  );
}
