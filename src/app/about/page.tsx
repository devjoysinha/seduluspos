import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";

export const metadata: Metadata = {
  title: "About Us — The Team Behind Sedulus POS",
  description:
    "Sedulus Technologies builds restaurant software that works the way restaurants actually work. Founded in 2024, trusted by 15,000+ restaurants across 150+ Indian cities.",
  alternates: { canonical: "https://www.sedulus.in/about" },
  openGraph: {
    title: "About Sedulus POS",
    description:
      "We're building the operating system for Indian restaurants — one that works offline, speaks Hindi, and fits a ₹100/day budget.",
    url: "https://www.sedulus.in/about",
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
      <section className="page-hero section-shell">
        <div className="hero-grid" aria-hidden="true" />
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> about us
            </span>
            <h1>
              We&apos;re Building the OS for{" "}
              <br />
              <em>Indian Restaurants</em>
            </h1>
          </div>
          <p>
            Sedulus Technologies was born out of a simple frustration: why does restaurant software feel like it was built
            for someone else? We set out to build a POS that works the way Indian restaurants actually operate — fast,
            offline, multilingual, and affordable.
          </p>
        </Reveal>
      </section>

      <section className="page-section section-shell" aria-labelledby="mission-heading">
        <Reveal as="article" className="feature-row">
          <div className="feature-copy mission-copy">
            <span className="micro step-number">01 / mission</span>
            <h3 id="mission-heading">Our Mission</h3>
            <p>
              India has over 75 lakh restaurants. Most still use handwritten KOTs, paper bills, and mental arithmetic for
              inventory. We want to change that — not by selling expensive hardware, but by putting powerful software on
              the devices they already own.
            </p>
            <p>
              Our goal is simple: every restaurant in India, from a roadside stall to a multi-city chain, should have
              access to world-class restaurant management tools — at a price they can afford and in a language they speak.
            </p>
          </div>
          <Tilt className="timeline-panel glass-panel">
            <div className="panel-heading micro">
              <span>
                <span className="status-dot" /> timeline
              </span>
              <span>2024 — 2026</span>
            </div>
            <ol className="timeline">
              {milestones.map((milestone) => (
                <li key={milestone.event}>
                  <span className="micro">{milestone.year}</span>
                  <span>{milestone.event}</span>
                </li>
              ))}
            </ol>
          </Tilt>
        </Reveal>
      </section>

      <section className="page-section section-shell" aria-labelledby="values-heading">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> what drives the product
            </span>
            <h2 id="values-heading">
              What We{" "}
              <br />
              <em>Believe</em>
            </h2>
          </div>
          <p>
            Four principles we hold ourselves to —{" "}
            <br />
            in the product, in pricing,{" "}
            <br />
            and in how we treat your data.
          </p>
        </Reveal>
        <div className="values-grid">
          {values.map((value, index) => (
            <Reveal as="article" className="value-card glass-panel" key={value.title}>
              <span className="micro">{String(index + 1).padStart(2, "0")}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta
        label="WE'RE HIRING"
        title="Want to Join"
        accent="the Team?"
        copy="We're always looking for people who care about building great products. Check out our open positions or drop us a line."
        primary={{ href: "/contact", label: "Get in touch" }}
        footnote="say hello. we read everything."
      />
    </>
  );
}
