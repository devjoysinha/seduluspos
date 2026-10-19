// Pointer-responsive tilt for the raised glass panels, ported from the Relay reference.
// The panel's transform lives in CSS (it reads --tilt-x / --tilt-y); these helpers only set those variables.

const interactive = "button, a, input, select, [role='button']";

export function freezePanel(panel: HTMLElement) {
  const transform = getComputedStyle(panel).transform;
  panel.style.transition = "none";
  panel.style.transform = transform;
}

export function releasePanel(panel: HTMLElement) {
  panel.style.removeProperty("transform");
  panel.style.removeProperty("transition");
}

// Returns a cleanup. `isEnabled` is read on every event so pausing motion takes effect immediately.
export function attachTilt(panel: HTMLElement, target: HTMLElement, isEnabled: () => boolean) {
  const finePointer = window.matchMedia("(pointer: fine)");
  let held = false;

  const onMove = (event: PointerEvent) => {
    if (!isEnabled() || !finePointer.matches || event.pointerType === "touch") return;
    // Hold the panel still while a control is under the pointer so it can't slide away mid-click.
    if ((event.target as Element).closest(interactive)) {
      if (!held) {
        freezePanel(panel);
        held = true;
      }
      return;
    }
    if (held) {
      releasePanel(panel);
      held = false;
    }
    const bounds = target.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5));
    panel.style.setProperty("--tilt-x", `${x * 7}deg`);
    panel.style.setProperty("--tilt-y", `${-y * 5}deg`);
  };
  const onLeave = () => {
    if (!isEnabled()) return;
    releasePanel(panel);
    held = false;
    panel.style.setProperty("--tilt-x", "0deg");
    panel.style.setProperty("--tilt-y", "0deg");
  };

  target.addEventListener("pointermove", onMove);
  target.addEventListener("pointerleave", onLeave);
  return () => {
    target.removeEventListener("pointermove", onMove);
    target.removeEventListener("pointerleave", onLeave);
    releasePanel(panel);
    panel.style.removeProperty("--tilt-x");
    panel.style.removeProperty("--tilt-y");
  };
}
