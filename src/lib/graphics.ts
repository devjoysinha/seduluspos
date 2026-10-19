import { useSyncExternalStore } from "react";

// Latest message from the WebGL renderer, shown in the "about this demo" dialog.

const INITIAL = "Visuals: loading the local light-field renderer.";
let message = INITIAL;
const listeners = new Set<() => void>();

export function setGraphicsStatus(next: string) {
  message = `Visuals: ${next}`;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useGraphicsStatus() {
  return useSyncExternalStore(subscribe, () => message, () => INITIAL);
}
