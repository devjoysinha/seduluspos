"use client";

import { useEffect } from "react";
import { toggleMotionPaused, useMotionState } from "@/lib/motion";

// The pause button, plus the <html> classes the stylesheet keys off (has-motion / motion-paused).
export default function MotionControl() {
  const { reduced, userPaused } = useMotionState();
  const enabled = !reduced && !userPaused;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("has-motion", enabled);
    root.classList.toggle("motion-paused", !enabled);
  }, [enabled]);

  return (
    <>
      <button
        type="button"
        className="motion-control micro"
        id="motion-toggle"
        aria-pressed={!enabled}
        disabled={reduced}
        onClick={toggleMotionPaused}
      >
        <span aria-hidden="true">Ⅱ</span>
        <span>{reduced ? "Reduced motion" : enabled ? "Pause motion" : "Resume motion"}</span>
      </button>
      <span className="sr-only" id="app-announcement" role="status" aria-live="polite" />
    </>
  );
}
