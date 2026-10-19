"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { resetWorkflow, runWorkflow, startAutoRun, useDemo } from "@/lib/demo";
import { getMotionState, isMotionEnabled, useMotionState } from "@/lib/motion";
import { WORKFLOWS, getRunState } from "@/lib/pos-flow";
import { attachTilt, freezePanel, releasePanel } from "@/lib/tilt";

const WIRES = [
  "M143 130C196 130 178 62 243 62",
  "M143 130C196 130 178 204 243 204",
  "M366 62C422 62 414 130 472 130",
  "M366 204C422 204 414 130 472 130",
];

const NODES = [
  { node: "workflow-node--trigger", brand: "node-brand--trigger" },
  { node: "workflow-node--condition", brand: "node-brand--condition" },
  { node: "workflow-node--database", brand: "node-brand--database" },
  { node: "workflow-node--approval", brand: "node-brand--approval" },
];

export default function HeroWindow() {
  const { workflowId, step, toast, records } = useDemo();
  const { reduced, userPaused } = useMotionState();
  const windowRef = useRef<HTMLDivElement>(null);

  const workflow = WORKFLOWS[workflowId];
  const state = getRunState(workflowId, step);
  const running = state.status === "running";
  const statusText =
    state.status === "running" ? `running ${step + 1} / 4` : state.status === "complete" ? "completed" : "ready to run";

  // Plays the example once, shortly after load.
  useEffect(() => startAutoRun(), []);

  // The window leans toward the pointer anywhere over the hero.
  useEffect(() => {
    const panel = windowRef.current;
    const hero = document.getElementById("top");
    if (!panel || !hero) return;
    return attachTilt(panel, hero, () => isMotionEnabled(getMotionState()));
  }, []);

  useEffect(() => {
    const panel = windowRef.current;
    if (!panel) return;
    if (userPaused && !reduced) freezePanel(panel);
    else releasePanel(panel);
  }, [reduced, userPaused]);

  // ...and tips a little further back as the page scrolls past it.
  useEffect(() => {
    const panel = windowRef.current;
    if (!panel) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!isMotionEnabled(getMotionState())) return;
      const top = document.getElementById("top")?.getBoundingClientRect().top ?? 0;
      const progress = Math.max(0, Math.min(1, -top / window.innerHeight));
      panel.style.setProperty("--scroll-tilt", `${progress * 6}deg`);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", request, { passive: true });
    request();
    return () => {
      window.removeEventListener("scroll", request);
      cancelAnimationFrame(frame);
      panel.style.removeProperty("--scroll-tilt");
    };
  }, []);

  return (
    <div className="hero-visual" id="product">
      <div className="window-aura" aria-hidden="true" />
      <div className="workflow-window glass-panel" id="workflow-window" ref={windowRef} aria-busy={running}>
        <div className="window-topbar">
          <div className="window-title">
            <span className="tiny-mark" aria-hidden="true">
              s/
            </span>
            <span id="workflow-title">{workflow.title}</span>
            <span className="window-divider" />
            <span className="micro">4 steps / live</span>
          </div>
          <span className="run-status micro" aria-live="polite">
            <span className="status-dot" />
            <span>{statusText}</span>
          </span>
        </div>

        <div className="workflow-graph">
          <div className="graph-tools">
            <button id="reset-flow" type="button" aria-label="Reset order flow" title="Reset order flow" onClick={resetWorkflow}>
              ↺
            </button>
            <button
              type="button"
              aria-label="Run order flow"
              title="Run order flow"
              disabled={running}
              onClick={() => runWorkflow()}
            >
              ▷
            </button>
          </div>
          <span className="graph-scale micro">100%</span>
          <svg className="graph-wires" viewBox="0 0 620 260" preserveAspectRatio="none" aria-hidden="true">
            {WIRES.map((d, index) => (
              <path
                key={d}
                d={d}
                className={[
                  state.status === "running" && index <= step ? "is-lit" : "",
                  state.status === "complete" ? "is-complete" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </svg>
          <span className="branch-label branch-label--yes micro">{workflow.branches[0]}</span>
          <span className="branch-label branch-label--no micro">{workflow.branches[1]}</span>
          {NODES.map(({ node, brand }, index) => {
            const icon = workflow.icons[index];
            return (
              <div
                key={node}
                className={`workflow-node ${node}${index === state.activeStep ? " is-active" : ""}${
                  index < state.completedSteps ? " is-complete" : ""
                }`}
              >
                <span className={`node-brand ${brand}`} style={icon.length > 1 ? ({ fontSize: 11 } as CSSProperties) : undefined}>
                  {icon}
                </span>
                <div>
                  <strong>{workflow.labels[index]}</strong>
                  <span className="micro">{workflow.captions[index]}</span>
                </div>
                <span className="node-indicator" />
              </div>
            );
          })}
          <span className="graph-caption micro">a little logic. a connected kitchen.</span>
        </div>

        <div className="run-console">
          <div className="console-heading micro">
            <span>recent activity</span>
            <span>duration</span>
          </div>
          {records.slice(0, 3).map((record) => (
            <div className="console-row micro" key={record.id}>
              <span>
                <i className="status-dot" /> {record.time}
              </span>
              <span>{record.workflow}</span>
              <span>{record.duration}</span>
            </div>
          ))}
        </div>
        <div className="window-bottom micro">
          <span>
            <span className="status-dot" /> sample workspace
          </span>
          <span>{records[0].id}</span>
        </div>
      </div>

      <div className={`run-toast${toast ? " is-visible" : ""}`} role="status">
        <span className="toast-check">✓</span>
        <div>
          <strong>One less thing on your list.</strong>
          <span className="micro">{workflow.toast}</span>
        </div>
        <span className="micro">just now</span>
      </div>
    </div>
  );
}
