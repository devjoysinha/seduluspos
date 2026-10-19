"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import PlanCard from "./PlanCard";
import Reveal from "./Reveal";
import { plans } from "@/lib/plans";
import { MAX_OUTLETS, MIN_OUTLETS, formatRupees, getEstimate } from "@/lib/pos-flow";

// Outlet estimator plus the three plan cards. Dragging the slider moves the highlight between plans.
export default function PricingBlock() {
  const [outlets, setOutlets] = useState(MIN_OUTLETS);
  const estimate = getEstimate(outlets);
  const fill = ((outlets - MIN_OUTLETS) / (MAX_OUTLETS - MIN_OUTLETS)) * 100;
  const outletLabel = `${outlets} ${outlets === 1 ? "outlet" : "outlets"}`;

  return (
    <>
      <Reveal className="estimator glass-panel">
        <div className="estimator-control">
          <label className="micro" htmlFor="outlet-count">
            YOUR OUTLETS
          </label>
          <div className="estimate-question">
            <h3>How many outlets are you running?</h3>
            <output id="outlet-output" htmlFor="outlet-count">
              {outletLabel}
            </output>
          </div>
          <input
            type="range"
            id="outlet-count"
            min={MIN_OUTLETS}
            max={MAX_OUTLETS}
            step={1}
            value={outlets}
            style={{ "--range-fill": `${fill}%` } as CSSProperties}
            aria-describedby="estimate-disclaimer"
            aria-valuetext={`${outletLabel}. ${estimate.name}, ${formatRupees(estimate.price)} a month.`}
            onChange={(event) => setOutlets(Number(event.target.value))}
          />
          <div className="range-labels micro">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>
        <div className="estimate-plan" aria-live="polite">
          <span className="micro">A GOOD FIT</span>
          <span>{estimate.name}</span>
          <div>
            <strong>{formatRupees(estimate.price)}</strong>
            <span className="micro"> / month</span>
          </div>
          <Link className="button button--small" href="/contact">
            Talk to us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Reveal>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} recommended={plan.name === estimate.name} limit={4} />
        ))}
      </div>
      <p className="micro pricing-disclaimer" id="estimate-disclaimer">
        Estimate for illustration: Pro covers one outlet, Enterprise is priced per outlet. See the pricing page for every
        feature and add-on.
      </p>
    </>
  );
}
