"use client";

import { runWorkflow, setStartOpen, useDemo } from "@/lib/demo";

// "Run a live example": plays the current sample flow in the hero window.
export function RunExampleButton() {
  const { step } = useDemo();
  return (
    <button
      className="button button--glass"
      id="run-demo"
      type="button"
      disabled={step >= 0 && step < 4}
      onClick={() => runWorkflow()}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="m6 3 7 5-7 5z" />
      </svg>{" "}
      Run a live example
    </button>
  );
}

// Text link in the dashboard card: run another sample flow.
export function RunAnotherButton() {
  const { step } = useDemo();
  return (
    <button type="button" className="text-button" disabled={step >= 0 && step < 4} onClick={() => runWorkflow()}>
      Run another example <span aria-hidden="true">↗</span>
    </button>
  );
}

// Opens the "choose an example" dialog.
export function StartButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-button" type="button" onClick={() => setStartOpen(true)}>
      {children} <span aria-hidden="true">↗</span>
    </button>
  );
}
