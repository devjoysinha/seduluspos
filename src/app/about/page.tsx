import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionHead, PinkCta } from "@/components/ui";

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
      <section className="relative mx-auto w-[min(1280px,88%)] pb-4 pt-20">
        <div className="hero-grid" aria-hidden="true" />
        <SectionHead
          as="h1"
          eyebrow="about us"
          title="We're Building the OS for"
          accent="Indian Restaurants"
          aside="Sedulus Technologies was born out of a simple frustration: why does restaurant software feel like it was built for someone else? We set out to build a POS that works the way Indian restaurants actually operate — fast, offline, multilingual, and affordable."
        />
      </section>

      <section className="mx-auto w-[min(1280px,88%)] border-t border-white/10 py-24" aria-labelledby="mission-heading">
        <RevealOnScroll>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <span className="micro mb-5 block text-[#a58ba0]">01 / mission</span>
              <h2
                id="mission-heading"
                className="mb-6 text-[clamp(30px,3.2vw,42px)] font-medium leading-[1.12] tracking-[-0.04em]"
              >
                Our Mission
              </h2>
              <p className="mb-5 max-w-[500px] text-[15px] leading-[1.85] text-[#a39aa3]">
                India has over 75 lakh restaurants. Most still use handwritten KOTs, paper bills, and mental arithmetic
                for inventory. We want to change that — not by selling expensive hardware, but by putting powerful
                software on the devices they already own.
              </p>
              <p className="max-w-[500px] text-[15px] leading-[1.85] text-[#a39aa3]">
                Our goal is simple: every restaurant in India, from a roadside stall to a multi-city chain, should have
                access to world-class restaurant management tools — at a price they can afford and in a language they
                speak.
              </p>
            </div>

            <div className="glass-panel p-8">
              <div className="micro mb-7 flex items-center justify-between border-b border-white/[0.06] pb-5">
                <span>
                  <span className="mr-1.5 text-[#8f7e8c]">#</span>timeline
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="status-dot" style={{ width: 4, height: 4 }} />
                  2024 — 2026
                </span>
              </div>
              <ol className="m-0 list-none border-l border-white/10 p-0 pl-7">
                {milestones.map((m, i) => (
                  <li key={i} className="relative pb-7 last:pb-0">
                    <span
                      className="absolute -left-[32px] top-[7px] h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgb(255_131_202/42%)]"
                      aria-hidden="true"
                    />
                    <span className="micro block text-primary">{m.year}</span>
                    <span className="text-[15px] leading-[1.6] text-[#d4ccd4]">{m.event}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="mx-auto w-[min(1280px,88%)] border-t border-white/10 py-24" aria-labelledby="values-heading">
        <SectionHead
          eyebrow="what drives the product"
          title="What We"
          accent="Believe"
          aside="Four principles we hold ourselves to — in the product, in pricing, and in how we treat your data."
        />
        <h2 id="values-heading" className="sr-only">
          What We Believe
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <RevealOnScroll key={v.title} className="h-full">
              <article className="glass-panel h-full p-8">
                <span className="micro text-[#a58ba0]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 mt-4 text-[24px] font-medium tracking-[-0.025em]">{v.title}</h3>
                <p className="text-[14px] leading-[1.8] text-[#a39aa3]">{v.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <PinkCta
        label="WE'RE HIRING"
        title="Want to Join"
        accent="the Team?"
        primary={{ href: "/contact", label: "Get in Touch" }}
      >
        We&apos;re always looking for people who care about building great products. Check out our open positions or
        drop us a line.
      </PinkCta>
    </>
  );
}
