"use client";

import { useState, type CSSProperties } from "react";
import Reveal from "./Reveal";

const MODES = [
  {
    id: "local",
    code: "local-network",
    name: "Billing & KOT",
    bar: "92%",
    latency: "2 ms",
    message: "Local network selected. Billing keeps running without internet.",
  },
  {
    id: "cloud",
    code: "cloud-sync",
    name: "Reports & back-office",
    bar: "52%",
    latency: "140 ms",
    message: "Cloud sync selected. Reports update whenever you are online.",
  },
  {
    id: "offline",
    code: "offline-queue",
    name: "No internet",
    bar: "30%",
    latency: "queued",
    message: "Offline queue selected. Orders wait on the device and sync when the connection returns.",
  },
];

export default function ModeCard() {
  const [selected, setSelected] = useState("local");
  const mode = MODES.find((item) => item.id === selected) ?? MODES[0];

  return (
    <Reveal as="article" className="regions-card glass-panel">
      <h3>Works with or without the internet.</h3>
      <p>Billing stays on your local network. Orders sync to the cloud when connectivity returns. Pick a mode to preview.</p>
      <div className="region-list" role="group" aria-label="Choose a sample connection mode">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`region-choice${item.id === selected ? " is-selected" : ""}`}
            aria-pressed={item.id === selected}
            onClick={() => setSelected(item.id)}
          >
            <span>
              <strong className="micro">{item.code}</strong>
              <small>{item.name}</small>
            </span>
            <span className="region-track">
              <i style={{ "--region": item.bar } as CSSProperties} />
            </span>
            <span className="micro">{item.latency}</span>
            <span className="region-radio" />
          </button>
        ))}
      </div>
      <span className="panel-footnote micro" aria-live="polite">
        <span className="status-dot" /> {mode.message}
      </span>
    </Reveal>
  );
}
