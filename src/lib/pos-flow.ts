// Sample data and pure logic behind the interactive panels. Everything here is illustrative:
// no real orders, payments or accounts are involved.

export type WorkflowId = "dinein" | "online" | "stock";

export type Workflow = {
  title: string;
  icons: [string, string, string, string];
  labels: [string, string, string, string];
  captions: [string, string, string, string];
  branches: [string, string];
  duration: string;
  toast: string;
};

export const WORKFLOWS: Record<WorkflowId, Workflow> = {
  dinein: {
    title: "Dine-in order",
    icons: ["T", "◇", "▤", "₹"],
    labels: ["Order placed", "Send to kitchen", "Deduct stock", "Print the bill"],
    captions: ["POS · table T-12", "KDS · grill station", "Inventory · recipe level", "GST invoice · UPI paid"],
    branches: ["kitchen", "stock"],
    duration: "2.3 s",
    toast: "Bill generated in 2.3 s.",
  },
  online: {
    title: "Swiggy order",
    icons: ["Sw", "◇", "▤", "↗"],
    labels: ["Order received", "Route to station", "Sync availability", "Hand to the rider"],
    captions: ["Swiggy · auto-accepted", "KDS · tandoor", "Menu · live stock", "Swiggy · ready for pickup"],
    branches: ["kitchen", "menu"],
    duration: "1.8 s",
    toast: "Rider notified in 1.8 s.",
  },
  stock: {
    title: "Low-stock alert",
    icons: ["!", "◇", "▤", "WA"],
    labels: ["Stock dips", "Check the level", "Update the list", "Alert the manager"],
    captions: ["Inventory · paneer below 2 kg", "below the reorder level", "Purchase list · vendor", "WhatsApp · outlet manager"],
    branches: ["yes", "no"],
    duration: "1.1 s",
    toast: "Manager alerted in 1.1 s.",
  },
};

export const WORKFLOW_IDS = Object.keys(WORKFLOWS) as WorkflowId[];

export const isWorkflowId = (value: string): value is WorkflowId => Object.hasOwn(WORKFLOWS, value);

export type RunState = { status: "idle" | "running" | "complete"; activeStep: number; completedSteps: number };

export function getRunState(workflowId: string, step: number): RunState {
  if (!isWorkflowId(workflowId) || !Number.isInteger(step) || step < -1 || step > 4) {
    throw new RangeError("Choose a known workflow and a step between -1 and 4.");
  }
  return {
    status: step === -1 ? "idle" : step === 4 ? "complete" : "running",
    activeStep: step >= 0 && step < 4 ? step : -1,
    completedSteps: Math.max(0, step),
  };
}

export type RunRecord = { id: string; time: string; workflow: string; status: "Completed"; duration: string };

export function createRunRecord(workflowId: WorkflowId, sequence: number, time: string): RunRecord {
  return {
    id: `O-${sequence}`,
    time,
    workflow: WORKFLOWS[workflowId].title,
    status: "Completed",
    duration: WORKFLOWS[workflowId].duration,
  };
}

export function toCsv(records: RunRecord[]) {
  const escapeCell = (value: string) => (/[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value);
  return [
    "order_id,time,workflow,status,duration",
    ...records.map((record) =>
      [record.id, record.time, record.workflow, record.status, record.duration].map(escapeCell).join(","),
    ),
  ].join("\r\n");
}

// 7 weekdays x 7 time slots; weekends run hotter, as they do in a restaurant.
export function buildActivityCells() {
  return Array.from({ length: 49 }, (_, index) => {
    const day = index % 7;
    const row = Math.floor(index / 7);
    return day > 4 ? 2 + ((index + row) % 3) : (index * 13 + row * 3) % 5;
  });
}

export const MIN_OUTLETS = 1;
export const MAX_OUTLETS = 50;
export const PRO_PRICE = 1999;
export const ENTERPRISE_PRICE_PER_OUTLET = 4999;

// Mirrors the published plans: Pro covers one outlet, Enterprise is priced per outlet.
export function getEstimate(outlets: number) {
  if (!Number.isInteger(outlets) || outlets < MIN_OUTLETS || outlets > MAX_OUTLETS) {
    throw new RangeError(`Outlets must be a whole number between ${MIN_OUTLETS} and ${MAX_OUTLETS}.`);
  }
  return outlets === MIN_OUTLETS
    ? { name: "Pro" as const, price: PRO_PRICE, caption: "unlimited devices" }
    : { name: "Enterprise" as const, price: ENTERPRISE_PRICE_PER_OUTLET * outlets, caption: `${outlets} outlets, one dashboard` };
}

export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export function getFoldState(top: number, sectionHeight: number, viewportHeight: number) {
  if (![top, sectionHeight, viewportHeight].every(Number.isFinite) || sectionHeight < 0 || viewportHeight <= 0) {
    throw new RangeError("The fold needs finite bounds and a positive viewport height.");
  }
  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  const progress = clamp((viewportHeight - top) / (viewportHeight + sectionHeight));
  const amount = Math.min(clamp((progress - 0.2) / 0.2), clamp((0.8 - progress) / 0.2));
  const open = amount * amount * (3 - 2 * amount);
  return {
    open,
    angle: (1 - open) * -20,
    yaw: (progress - 0.5) * 24 * (1 - open),
    opacity: clamp((open - 0.65) / 0.35),
  };
}
