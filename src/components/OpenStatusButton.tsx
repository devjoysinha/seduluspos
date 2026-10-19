"use client";

import { OPEN_STATUS_EVENT } from "@/lib/events";

export default function OpenStatusButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_STATUS_EVENT))}>
      About this demo
    </button>
  );
}
