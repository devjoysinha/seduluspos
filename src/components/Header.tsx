"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BrandMark from "./BrandMark";
import { OPEN_STATUS_EVENT } from "@/lib/events";
import { useGraphicsStatus } from "@/lib/graphics";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const statusRef = useRef<HTMLDialogElement>(null);
  const graphics = useGraphicsStatus();

  useEffect(() => {
    const openStatus = () => statusRef.current?.showModal();
    window.addEventListener(OPEN_STATUS_EVENT, openStatus);
    return () => window.removeEventListener(OPEN_STATUS_EVENT, openStatus);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".site-header")) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Link className="wordmark" href="/" aria-label="Sedulus POS home">
            <BrandMark />
            <span>
              Sedulus <span className="wordmark-sub">POS</span>
            </span>
          </Link>
          <nav
            className={`primary-nav${menuOpen ? " is-open" : ""}`}
            id="primary-nav"
            aria-label="Main navigation"
            onClick={(event) => {
              if ((event.target as Element).closest("a")) setMenuOpen(false);
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="system-status mono" type="button" onClick={() => statusRef.current?.showModal()}>
              <span className="status-dot" /> outlets in sync
            </button>
            <Link className="button button--small" href="/contact" onClick={() => setMenuOpen(false)}>
              <span className="cta-full">Start free trial</span>
              <span className="cta-short">Free trial</span> <span aria-hidden="true">↗</span>
            </Link>
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={statusRef}
        className="demo-dialog status-dialog"
        aria-labelledby="status-title"
        onClick={(event) => {
          const dialog = event.currentTarget;
          if (event.target !== dialog) return;
          const bounds = dialog.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            dialog.close();
          }
        }}
      >
        <button className="dialog-close" type="button" aria-label="Close status" onClick={() => statusRef.current?.close()}>
          ×
        </button>
        <span className="eyebrow">
          <span className="status-dot" /> behind the interface
        </span>
        <h2 id="status-title">
          A live{" "}
          <br />
          <em>product preview.</em>
        </h2>
        <p>
          The order flow, kitchen ticket, outlet estimator, CSV export and dashboard on this site run in your browser
          with sample data. Orders, outlets and numbers in those panels are illustrative.
        </p>
        <ul className="demo-details">
          <li>
            <span className="status-dot" /> No orders, payments or accounts are created by the demo panels.
          </li>
          <li>
            <span className="status-dot" /> Only the contact form sends anything, and only when you submit it.
          </li>
          <li>
            <span className="status-dot" /> Motion can be paused at any time.
          </li>
        </ul>
        <p className="micro" id="graphics-status">
          {graphics}
        </p>
      </dialog>
    </>
  );
}
