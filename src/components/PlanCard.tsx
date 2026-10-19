"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import type { Plan } from "@/lib/plans";

// `limit` trims the feature list for the home page; the pricing page shows every feature.
export default function PlanCard({ plan, recommended, limit }: { plan: Plan; recommended: boolean; limit?: number }) {
  const features = limit ? plan.features.slice(0, limit) : plan.features;
  return (
    <Reveal
      as="article"
      className={`price-card glass-panel${limit ? "" : " price-card--full"}${recommended ? " is-recommended" : ""}`}
    >
      {plan.featured && <span className="plan-badge micro">MOST POPULAR</span>}
      <span className="micro">{plan.step}</span>
      <h3>{plan.name}</h3>
      <div className="price-value">
        {plan.price} <span className="micro">{plan.period}</span>
      </div>
      <p>{plan.description}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className={`button${plan.featured ? "" : " button--glass"}`} href="/contact">
        {plan.cta} <span aria-hidden="true">↗</span>
      </Link>
    </Reveal>
  );
}
