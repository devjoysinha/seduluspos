"use client";

import Reveal from "./Reveal";
import { RunAnotherButton } from "./RunButton";
import { exportRecords, useDemo } from "@/lib/demo";
import { buildActivityCells } from "@/lib/pos-flow";

const CELLS = buildActivityCells();

export function ExportButton() {
  return (
    <button className="text-button" type="button" onClick={exportRecords}>
      Export orders <span aria-hidden="true">↓</span>
    </button>
  );
}

export function HeatmapCard() {
  const { pulse } = useDemo();
  return (
    <Reveal as="article" className="heatmap-card glass-panel">
      <div className="panel-heading micro">
        <span>this week, one order at a time</span>
        <span className="outline-badge">all caught up</span>
      </div>
      <div className="heatmap-body">
        <div className="heatmap-times micro">
          <span>11</span>
          <span>15</span>
          <span>19</span>
          <span>23</span>
        </div>
        <div className="heatmap" aria-label="Illustrative seven-day order activity">
          {CELLS.map((level, index) => (
            <span
              key={index}
              className={`heatmap-cell${pulse === index ? " is-pulsing" : ""}`}
              data-level={level}
              title={`Day ${(index % 7) + 1}, slot ${Math.floor(index / 7) + 1}: activity level ${level} of 4`}
            />
          ))}
        </div>
      </div>
      <div className="heatmap-days micro">
        <span>mon</span>
        <span>tue</span>
        <span>wed</span>
        <span>thu</span>
        <span>fri</span>
        <span>sat</span>
        <span>sun</span>
      </div>
    </Reveal>
  );
}

export function PeopleCard() {
  const { tickets, ticketChoice } = useDemo();
  return (
    <Reveal as="article" className="people-card glass-panel">
      <span className="micro">waiting on the pass</span>
      <div className="people-avatars" aria-hidden="true">
        <span>AL</span>
        <span>MK</span>
        <span>JS</span>
      </div>
      <strong>{tickets}</strong>
      <span className="micro">{ticketChoice ? "sample tickets still on the pass" : "sample tickets in the queue"}</span>
    </Reveal>
  );
}

export function RunLogCard() {
  const { records } = useDemo();
  return (
    <Reveal as="article" className="live-log-card glass-panel">
      <div className="panel-heading micro">
        <span>latest orders</span>
        <span>sample data</span>
      </div>
      <div className="workspace-log">
        {records.slice(0, 3).map((record) => (
          <div className="log-entry micro" key={record.id}>
            <span className="status-dot" />
            <span>{record.workflow}</span>
            <span>{record.duration}</span>
          </div>
        ))}
      </div>
      <RunAnotherButton />
    </Reveal>
  );
}
