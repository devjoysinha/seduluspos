"use client";

import { useEffect, useRef } from "react";
import { BrandGlyph } from "./BrandMark";
import { getMotionState, isMotionEnabled, useMotionState } from "@/lib/motion";
import { getFoldState } from "@/lib/pos-flow";

// A pink plate that opens from a small logo as you scroll to it, holds open for reading,
// then folds back into the logo. All of its geometry is driven by CSS variables set here.
export default function FoldCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { reduced, userPaused } = useMotionState();

  useEffect(() => {
    const fold = ref.current;
    const section = fold?.closest(".fold-section");
    if (!fold || !section) return;
    let frame = 0;

    const apply = () => {
      frame = 0;
      if (!isMotionEnabled(getMotionState())) {
        // Reduced motion shows the open plate; a user pause just leaves it where it is.
        if (getMotionState().reduced) {
          fold.style.setProperty("--fold-open", "1");
          fold.style.setProperty("--fold-angle", "0deg");
          fold.style.setProperty("--fold-yaw", "0deg");
          fold.style.setProperty("--fold-opacity", "1");
          fold.style.setProperty("--fold-mark-offset", "60px");
        }
        return;
      }
      const bounds = section.getBoundingClientRect();
      const state = getFoldState(bounds.top, bounds.height, window.innerHeight);
      fold.style.setProperty("--fold-open", String(state.open));
      fold.style.setProperty("--fold-angle", `${state.angle}deg`);
      fold.style.setProperty("--fold-yaw", `${state.yaw}deg`);
      fold.style.setProperty("--fold-opacity", String(state.opacity));
      fold.style.setProperty("--fold-mark-offset", `${state.open * 60}px`);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    apply();
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      cancelAnimationFrame(frame);
    };
  }, [reduced, userPaused]);

  return (
    <div className="fold-card" id="fold-card" ref={ref}>
      <span className="micro">a different kind of rush hour</span>
      <h2>
        Less switching.{" "}
        <br />
        <em>More serving.</em>
      </h2>
      <span className="fold-mark" aria-hidden="true">
        <BrandGlyph />
      </span>
      <span className="micro fold-caption">leave the repeat work to sedulus.</span>
    </div>
  );
}
