import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import BrandMark from "@/components/BrandMark";
import ClosingCta from "@/components/ClosingCta";
import { ExportButton, HeatmapCard, PeopleCard, RunLogCard } from "@/components/DashboardPanels";
import FoldCard from "@/components/FoldCard";
import HeroWindow from "@/components/HeroWindow";
import KitchenPanel from "@/components/KitchenPanel";
import ModeCard from "@/components/ModeCard";
import PricingBlock from "@/components/PricingBlock";
import Reveal from "@/components/Reveal";
import { RunExampleButton, StartButton } from "@/components/RunButton";
import StartDialog from "@/components/StartDialog";
import Tilt from "@/components/Tilt";

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
  { name: "Razorpay", mark: "Rp" },
];

const traceRows = [
  { label: "Menu selection", bar: "76%", time: "1.2 s" },
  { label: "KOT generated", bar: "21%", time: "0.3 s" },
  { label: "Kitchen notified", bar: "43%", time: "0.5 s" },
  { label: "Bill printed", bar: "57%", time: "0.3 s" },
];

const bars = [
  { day: "mon", h: 52 },
  { day: "tue", h: 66 },
  { day: "wed", h: 61 },
  { day: "thu", h: 96 },
  { day: "fri", h: 118 },
  { day: "sat", h: 148, pink: true },
  { day: "sun", h: 126 },
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

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell" id="top" aria-labelledby="hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> trusted by 15,000+ restaurants across india
          </span>
          <h1 id="hero-heading">
            Your Restaurant,{" "}
            <br />
            <em>Simplified.</em>
          </h1>
          <p>
            From billing to kitchen to delivery — Sedulus POS handles it all.{" "}
            <br />
            The complete restaurant management platform{" "}
            <br className="desktop-break" /> that works even when the internet doesn&apos;t.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">
              Start 14-Day Free Trial <span aria-hidden="true">↗</span>
            </Link>
            <RunExampleButton />
          </div>
          <span className="micro hero-note">no credit card required / setup in 15 minutes / cancel anytime</span>
        </div>

        <HeroWindow />

        <div className="integration-strip">
          <div className="micro integration-label">
            your tools, already{" "}
            <br />
            on speaking terms.
          </div>
          {integrations.map((app) => (
            <div className="integration" key={app.name}>
              <span className="app-icon" aria-hidden="true">
                {app.mark}
              </span>
              <span>{app.name}</span>
            </div>
          ))}
          <Link className="integration-tail micro" href="/features#integrations">
            + Google Pay, Tally, WhatsApp & more ↗
          </Link>
        </div>
        <div className="hero-bottom micro">
          <span>01 — built for the rush</span>
          <a href="#how-it-works">
            follow the flow <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="how-section section-shell" id="how-it-works">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> from order to kitchen to table
            </span>
            <h2>
              Less juggling.{" "}
              <br />
              <em>More serving.</em>
            </h2>
          </div>
          <p>
            Every order, every table, every kitchen station —{" "}
            <br />
            connected in real time. Set it up once,{" "}
            <br />
            and let your restaurant run smoother.
          </p>
        </Reveal>

        <Reveal as="article" className="feature-row">
          <div className="feature-copy">
            <span className="micro step-number">01 / lightning-fast billing</span>
            <h3>
              Bill in seconds.{" "}
              <br />
              Not minutes.
            </h3>
            <p>
              Generate bills in under 3 seconds. Touch-optimised POS with smart menu search, split bills, and instant KOT
              printing.
            </p>
            <StartButton>Explore an example</StartButton>
          </div>
          <Tilt className="trace-panel glass-panel">
            <div className="panel-heading micro">
              <span>
                <span className="status-dot" /> order O-1042
              </span>
              <span>billing trace</span>
            </div>
            {traceRows.map((row) => (
              <div className="trace-row" key={row.label}>
                <span className="trace-check">✓</span>
                <span>{row.label}</span>
                <div className="trace-rail">
                  <span style={{ "--bar": row.bar } as CSSProperties} />
                </div>
                <span className="micro">{row.time}</span>
              </div>
            ))}
            <div className="trace-axis micro">
              <span>0</span>
              <span>0.5</span>
              <span>1.0</span>
              <span>1.5 s</span>
            </div>
            <div className="panel-footnote micro">
              <span>every step accounted for.</span>
              <span>2.3 s total</span>
            </div>
          </Tilt>
        </Reveal>

        <Reveal as="article" className="feature-row feature-row--reverse">
          <KitchenPanel />
          <div className="feature-copy">
            <span className="micro step-number">02 / kitchen display system</span>
            <h3>
              Your kitchen.{" "}
              <br />
              Always in sync.
            </h3>
            <p>
              Real-time order tracking for your kitchen. Colour-coded priorities, auto-routing to stations, and average
              prep-time analytics.
            </p>
            <span className="micro feature-note">try the ticket on the left ↖</span>
          </div>
        </Reveal>

        <Reveal as="article" className="feature-row">
          <div className="feature-copy">
            <span className="micro step-number">03 / real-time analytics</span>
            <h3>
              Every sale leaves{" "}
              <br />a clear paper trail.
            </h3>
            <p>
              Track sales, top dishes, peak hours, and staff performance from any device. Daily P&amp;L, outlet
              comparison, and trend reports.
            </p>
            <a className="text-button" href="#workspace">
              Open the sample workspace <span aria-hidden="true">↗</span>
            </a>
          </div>
          <Tilt className="volume-panel glass-panel">
            <div className="panel-heading micro">
              <span>sales, day by day</span>
              <span>
                <span className="pink-text">+24.8%</span> this week
              </span>
            </div>
            <div className="columns-3d" role="img" aria-label="Sample daily sales by weekday, highest on Saturday">
              {bars.map((bar) => (
                <div className="column-item" key={bar.day}>
                  <div className={`column${bar.pink ? " column--pink" : ""}`} style={{ "--height": `${bar.h}px` } as CSSProperties}>
                    <i />
                  </div>
                  <span className="micro">{bar.day}</span>
                </div>
              ))}
            </div>
            <div className="panel-footnote micro">
              <span>sample workspace / last 7 days</span>
              <span>₹4,28,640</span>
            </div>
          </Tilt>
        </Reveal>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <Reveal as="article" className="capability-card glass-panel" key={item.title}>
              <span className="capability-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={item.path} />
                </svg>
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="fold-section section-shell" aria-label="A little less busywork">
        <div className="fold-stage">
          <FoldCard />
        </div>
      </section>

      <section className="reliability-section section-shell" id="reliability">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> built underneath the pretty parts
            </span>
            <h2>
              Quietly dependable.{" "}
              <br />
              <em>Even offline.</em>
            </h2>
          </div>
          <p>
            Billing on your local network, orders synced{" "}
            <br />
            when the internet returns. The details that{" "}
            <br />
            keep a service moving, even when the Wi-Fi doesn&apos;t.
          </p>
        </Reveal>
        <div className="reliability-grid">
          <Reveal as="article" className="runtime-card glass-panel">
            <h3>Different apps. One kitchen.</h3>
            <p>Swiggy, Zomato and payments in one clear view of what comes in and where it goes.</p>
            <div className="connection-map" role="img" aria-label="Swiggy, Zomato, payments and Tally connected through Sedulus POS">
              <svg viewBox="0 0 480 220" aria-hidden="true">
                <path d="M105 60C175 60 160 110 240 110M105 160C175 160 160 110 240 110M375 60C305 60 320 110 240 110M375 160C305 160 320 110 240 110" />
              </svg>
              <span className="connection-app connection-app--one">
                <b>Sw</b>
                <span className="micro">swiggy</span>
              </span>
              <span className="connection-app connection-app--two">
                <b>Z</b>
                <span className="micro">zomato</span>
              </span>
              <div className="connection-core" aria-hidden="true">
                <BrandMark />
              </div>
              <span className="connection-app connection-app--three">
                <b>₹</b>
                <span className="micro">payments</span>
              </span>
              <span className="connection-app connection-app--four">
                <b>Ta</b>
                <span className="micro">tally</span>
              </span>
            </div>
            <span className="panel-footnote micro">the wiring fades away. the service doesn&apos;t.</span>
          </Reveal>
          <ModeCard />
        </div>
      </section>

      <section className="workspace-section section-shell" id="workspace">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> a working view, not another dashboard
            </span>
            <h2>
              A little clarity.{" "}
              <br />
              <em>For the whole service.</em>
            </h2>
          </div>
          <p>
            What&apos;s selling, what&apos;s cooking, and what needs you.{" "}
            <br />
            All in one place. All of the numbers below{" "}
            <br />
            are illustrative sample data.
          </p>
        </Reveal>
        <div className="workspace-toolbar">
          <span className="micro">
            <span className="status-dot" /> SAMPLE WORKSPACE <span className="toolbar-separator">/</span> last 7 days
          </span>
          <ExportButton />
        </div>
        <div className="dashboard-grid">
          <HeatmapCard />
          <Reveal as="article" className="donut-card glass-panel">
            <span className="micro">uptime, even offline</span>
            <div className="donut">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle className="donut-track" cx="60" cy="60" r="47" />
                <circle className="donut-fill" cx="60" cy="60" r="47" style={{ strokeDasharray: "295 295.31" }} />
              </svg>
              <strong>
                99.9<span>%</span>
              </strong>
            </div>
            <p className="micro">works even when the internet doesn&apos;t</p>
          </Reveal>
          <PeopleCard />
          <Reveal as="article" className="recovery-card glass-panel">
            <span className="micro">a rush hour. already handled.</span>
            <svg viewBox="0 0 310 90" aria-label="Illustrative chart of a busy hour being served" role="img">
              <path className="recovery-muted" d="M0 64C40 64 40 10 80 25S130 90 165 53 215 24 250 44 280 58 310 25" />
              <path className="recovery-pink" d="M0 52C25 63 50 51 85 57S145 31 170 36 220 67 250 37 285 46 310 22" />
            </svg>
            <div className="recovery-legend micro">
              <span>
                <i /> served
              </span>
              <span>
                <i /> queued
              </span>
            </div>
          </Reveal>
          <RunLogCard />
        </div>
      </section>

      <section className="results-section section-shell" id="customers">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> small steps. a bigger picture.
            </span>
            <h2>
              What a little less{" "}
              <br />
              <em>manual can look like.</em>
            </h2>
          </div>
          <p>
            Numbers from restaurants running Sedulus POS,{" "}
            <br />
            from single outlets to chains.{" "}
            <br />
            The best result is time for something else.
          </p>
        </Reveal>
        <Reveal className="results-grid">
          <article>
            <span className="micro">orders processed</span>
            <strong>50Cr+</strong>
            <span className="micro">and counting every day</span>
            <svg viewBox="0 0 300 70" aria-hidden="true">
              <path d="M0 60 21 53 42 55 63 41 84 45 105 30 126 33 147 20 168 29 189 14 210 17 231 9 252 12 273 2 300 5" />
            </svg>
            <p>From dine-in to delivery, every order tracked and accounted for.</p>
          </article>
          <article>
            <span className="micro">restaurants live</span>
            <strong>15,000+</strong>
            <span className="micro">across 150+ cities in india</span>
            <div className="time-bars" aria-hidden="true">
              {Array.from({ length: 15 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
            <p>Single outlets to multi-outlet chains, all on one platform.</p>
          </article>
          <article>
            <span className="micro">uptime</span>
            <strong>
              99.9<small>%</small>
            </strong>
            <span className="micro">keeps billing even offline</span>
            <div className="result-progress" aria-hidden="true">
              <i style={{ width: "99.9%" }} />
            </div>
            <p>Billing runs on your local network, so a dropped connection never stops a service.</p>
          </article>
        </Reveal>
      </section>

      <section className="steps-section section-shell" id="get-started">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> up and running
            </span>
            <h2>
              Up and running in{" "}
              <br />
              <em>3 simple steps.</em>
            </h2>
          </div>
          <p>
            From sign-up to your first bill, our team{" "}
            <br />
            helps with menu migration and staff training{" "}
            <br />
            along the way.
          </p>
        </Reveal>
        <ol className="steps-grid">
          {steps.map((item) => (
            <Reveal as="li" className="step-card glass-panel" key={item.step}>
              <span className="step-index">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="quotes-section section-shell" id="stories">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> in their words
            </span>
            <h2>
              Owners who run{" "}
              <br />
              <em>busy kitchens.</em>
            </h2>
          </div>
          <p>
            Feedback from restaurant owners and managers{" "}
            <br />
            using Sedulus POS every day.
          </p>
        </Reveal>
        <div className="quotes-grid">
          {testimonials.map((item) => (
            <Reveal as="figure" className="quote-card glass-panel" key={item.name}>
              <blockquote>
                <em>&ldquo;{item.quote}&rdquo;</em>
              </blockquote>
              <figcaption>
                <span className="quote-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <span className="micro">{item.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pricing-section section-shell" id="pricing">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> simple, transparent pricing
            </span>
            <h2>
              More features.{" "}
              <br />
              <em>Not a bigger bill.</em>
            </h2>
          </div>
          <p>
            Start free. Upgrade when you grow.{" "}
            <br />
            No hidden fees, no long-term contracts.{" "}
            <br />
            Estimate a plan from the outlets you run.
          </p>
        </Reveal>
        <PricingBlock />
      </section>

      <ClosingCta
        label="14-DAY FREE TRIAL"
        title="Ready to transform"
        accent="your restaurant?"
        copy="Join 15,000+ restaurants already using Sedulus POS. Start your free 14-day trial today — no credit card, no commitment."
        primary={{ href: "/contact", label: "Start free trial" }}
        secondary={{ href: "/pricing", label: "View pricing" }}
        footnote="start with a demo. see where it goes."
      />

      <StartDialog />
    </>
  );
}
