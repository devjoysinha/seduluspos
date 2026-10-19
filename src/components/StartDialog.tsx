"use client";

import { useEffect, useRef, useState } from "react";
import { announce, runWorkflow, setStartOpen, useDemo } from "@/lib/demo";
import { getMotionState, isMotionEnabled } from "@/lib/motion";
import { isWorkflowId, type WorkflowId } from "@/lib/pos-flow";

export default function StartDialog() {
  const { startOpen, workflowId } = useDemo();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [picked, setPicked] = useState<WorkflowId | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (startOpen && !dialog.open) dialog.showModal();
    else if (!startOpen && dialog.open) dialog.close();
  }, [startOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="demo-dialog"
      aria-labelledby="demo-title"
      onClose={() => setStartOpen(false)}
      onClick={(event) => {
        const dialog = event.currentTarget;
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          dialog.close();
        }
      }}
    >
      <button className="dialog-close" type="button" aria-label="Close" onClick={() => dialogRef.current?.close()}>
        ×
      </button>
      <span className="eyebrow">
        <span className="status-dot" /> let&apos;s put something in motion
      </span>
      <h2 id="demo-title">
        Pick a flow.{" "}
        <br />
        <em>Watch it run.</em>
      </h2>
      <p>
        Choose an example and watch four connected steps run. This is a preview with sample data: it doesn&apos;t place
        real orders or contact any service.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const id = picked ?? workflowId;
          if (!isWorkflowId(id)) {
            announce("Choose one of the three available example flows.");
            return;
          }
          dialogRef.current?.close();
          runWorkflow(id);
          document
            .getElementById("top")
            ?.scrollIntoView({ behavior: isMotionEnabled(getMotionState()) ? "smooth" : "instant" });
          document.getElementById("reset-flow")?.focus({ preventScroll: true });
        }}
      >
        <label className="micro" htmlFor="template-select">
          CHOOSE YOUR STARTING POINT
        </label>
        <select
          id="template-select"
          name="template"
          value={picked ?? workflowId}
          onChange={(event) => {
            if (isWorkflowId(event.target.value)) setPicked(event.target.value);
          }}
        >
          <option value="dinein">Dine-in order · POS → Kitchen → Bill</option>
          <option value="online">Swiggy order · Aggregator → KDS → Rider</option>
          <option value="stock">Low-stock alert · Inventory → WhatsApp</option>
        </select>
        <button className="button" type="submit">
          Run this flow <span aria-hidden="true">↗</span>
        </button>
      </form>
      <span className="micro dialog-footnote">no signup. no real data. just a little possibility.</span>
    </dialog>
  );
}
