import { useSyncExternalStore } from "react";
import { getMotionState, isMotionEnabled, subscribeMotion } from "./motion";
import {
  createRunRecord,
  getRunState,
  toCsv,
  type RunRecord,
  type WorkflowId,
} from "./pos-flow";

// Client-side state shared by the hero workflow window, the kitchen panel, the dashboard cards,
// the CSV export and the "start" dialog. Server renders always see INITIAL.

export type TicketChoice = "ready" | "hold" | null;

export type DemoState = {
  workflowId: WorkflowId;
  step: number;
  toast: boolean;
  sequence: number;
  records: RunRecord[];
  pulse: number | null;
  tickets: number;
  ticketChoice: TicketChoice;
  startOpen: boolean;
};

const INITIAL: DemoState = {
  workflowId: "dinein",
  step: -1,
  toast: false,
  sequence: 1042,
  records: [
    createRunRecord("dinein", 1042, "14:32:08"),
    createRunRecord("online", 1041, "14:30:42"),
    createRunRecord("stock", 1040, "14:28:11"),
  ],
  pulse: null,
  tickets: 3,
  ticketChoice: null,
  startOpen: false,
};

let state: DemoState = INITIAL;
const listeners = new Set<() => void>();
let runTimer: ReturnType<typeof setTimeout> | undefined;
let toastTimer: ReturnType<typeof setTimeout> | undefined;
let autoTimer: ReturnType<typeof setTimeout> | undefined;
let motionBound = false;

function set(patch: Partial<DemoState>) {
  state = { ...state, ...patch };
  listeners.forEach((listener) => listener());
}

export function announce(message: string) {
  if (typeof document === "undefined") return;
  const region = document.getElementById("app-announcement");
  if (region) region.textContent = message;
}

function clearTimers() {
  clearTimeout(runTimer);
  clearTimeout(toastTimer);
  clearTimeout(autoTimer);
}

function completeRun() {
  const sequence = state.sequence + 1;
  const time = new Date().toLocaleTimeString("en-GB", { hour12: false });
  const record = createRunRecord(state.workflowId, sequence, time);
  set({
    step: 4,
    sequence,
    records: [record, ...state.records].slice(0, 20),
    pulse: sequence % 49,
    toast: true,
  });
  announce(`${record.workflow} completed. All four sample steps finished.`);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => set({ toast: false }), 4200);
}

function advanceRun() {
  if (state.step === 3) {
    completeRun();
    return;
  }
  set({ step: state.step + 1 });
  runTimer = setTimeout(advanceRun, 720);
}

// Pausing motion mid-run finishes the run immediately instead of freezing it half-way.
function bindMotion() {
  if (motionBound || typeof window === "undefined") return;
  motionBound = true;
  let wasEnabled = isMotionEnabled(getMotionState());
  subscribeMotion(() => {
    const enabled = isMotionEnabled(getMotionState());
    if (enabled === wasEnabled) return;
    wasEnabled = enabled;
    if (enabled) return;
    clearTimeout(autoTimer);
    if (state.step >= 0 && state.step < 4) {
      clearTimeout(runTimer);
      completeRun();
    }
  });
}

export function runWorkflow(id: WorkflowId = state.workflowId) {
  bindMotion();
  getRunState(id, 0);
  clearTimers();
  set({ workflowId: id, step: 0, toast: false });
  if (isMotionEnabled(getMotionState())) runTimer = setTimeout(advanceRun, 720);
  else completeRun();
}

export function resetWorkflow() {
  clearTimers();
  set({ step: -1, toast: false });
  announce("The sample order flow is reset and ready to run.");
}

// Plays the example once shortly after the page loads. Returns its own cleanup.
export function startAutoRun() {
  bindMotion();
  if (state.step !== -1 || !isMotionEnabled(getMotionState())) return () => {};
  autoTimer = setTimeout(() => runWorkflow(), 1600);
  return () => clearTimeout(autoTimer);
}

export function reviewTicket(choice: Exclude<TicketChoice, null>) {
  const first = state.ticketChoice === null;
  set({ ticketChoice: choice, tickets: first ? state.tickets - 1 : state.tickets });
}

export function setStartOpen(startOpen: boolean) {
  set({ startOpen });
}

export function exportRecords() {
  const url = URL.createObjectURL(new Blob([toCsv(state.records)], { type: "text/csv;charset=utf-8;" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "sedulus-sample-orders.csv";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce(`Exported ${state.records.length} sample orders as CSV.`);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useDemo() {
  return useSyncExternalStore(subscribe, () => state, () => INITIAL);
}
