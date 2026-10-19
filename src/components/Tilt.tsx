"use client";

import { useEffect, useRef, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { getMotionState, isMotionEnabled, useMotionState } from "@/lib/motion";
import { attachTilt, freezePanel, releasePanel } from "@/lib/tilt";

type TiltProps = HTMLAttributes<HTMLElement> & { as?: ElementType; children?: ReactNode };

// A glass panel that leans toward the pointer. The CSS ([data-tilt]) reads the --tilt-* variables.
export default function Tilt({ as = "div", children, ...rest }: TiltProps) {
  const ref = useRef<HTMLElement>(null);
  const { reduced, userPaused } = useMotionState();
  const Component = as as ElementType;

  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    return attachTilt(panel, panel, () => isMotionEnabled(getMotionState()));
  }, []);

  // Pausing motion freezes the panel in its current pose instead of snapping it flat.
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    if (userPaused && !reduced) freezePanel(panel);
    else releasePanel(panel);
  }, [reduced, userPaused]);

  return (
    <Component ref={ref} data-tilt="" {...rest}>
      {children}
    </Component>
  );
}
