"use client";

import BrandMark from "./BrandMark";
import Tilt from "./Tilt";
import { reviewTicket, useDemo } from "@/lib/demo";

const RESULT = {
  none: "Sample ticket · try either action.",
  ready: "Marked ready. The runner is told table 12 is up.",
  hold: "On hold. The kitchen sees the ticket flagged.",
};

export default function KitchenPanel() {
  const { ticketChoice } = useDemo();
  return (
    <Tilt className="approval-panel glass-panel">
      <div className="panel-heading">
        <span>
          <span className="slack-hash">#</span> kitchen
        </span>
        <span className="micro">today, 14:32</span>
      </div>
      <div className="approval-message">
        <BrandMark small />
        <div>
          <strong>
            Sedulus <span className="app-badge micro">APP</span>
          </strong>
          <p>A new ticket just landed on the pass.</p>
          <div className="approval-detail">
            <span className="micro">TABLE 12 · DINE-IN</span>
            <strong>
              KOT #1043 <span>3 items</span>
            </strong>
            <span className="micro">grill station · prep time 8 min</span>
          </div>
          <div className="approval-actions">
            <button
              type="button"
              className="approve-button"
              aria-pressed={ticketChoice === "ready"}
              onClick={() => reviewTicket("ready")}
            >
              ✓ Mark ready
            </button>
            <button
              type="button"
              className="reject-button"
              aria-pressed={ticketChoice === "hold"}
              onClick={() => reviewTicket("hold")}
            >
              Hold
            </button>
          </div>
          <p className="approval-result micro" aria-live="polite">
            {RESULT[ticketChoice ?? "none"]}
          </p>
        </div>
      </div>
    </Tilt>
  );
}
