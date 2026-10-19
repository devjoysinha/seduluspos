import { useSyncExternalStore } from "react";

// One source of truth for "should things move": the OS reduced-motion setting plus the visitor's own pause button.

type MotionState = { userPaused: boolean; reduced: boolean };

const SERVER_STATE: MotionState = { userPaused: false, reduced: false };
let state: MotionState = SERVER_STATE;
const listeners = new Set<() => void>();
let mediaBound = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function bindMedia() {
  if (mediaBound || typeof window === "undefined") return;
  mediaBound = true;
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  state = { ...state, reduced: query.matches };
  query.addEventListener("change", (event) => {
    state = { ...state, reduced: event.matches };
    emit();
  });
}

export const isMotionEnabled = (value: MotionState = state) => !value.reduced && !value.userPaused;

export function subscribeMotion(listener: () => void) {
  bindMedia();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getMotionState() {
  bindMedia();
  return state;
}

export function toggleMotionPaused() {
  bindMedia();
  state = { ...state, userPaused: !state.userPaused };
  emit();
}

export function useMotionState() {
  return useSyncExternalStore(subscribeMotion, getMotionState, () => SERVER_STATE);
}

export function useMotionEnabled() {
  return isMotionEnabled(useMotionState());
}
