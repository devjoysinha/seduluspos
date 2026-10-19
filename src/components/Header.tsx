"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-20 h-[72px] border-b border-white/[0.04]"
      style={{ background: "rgb(5 6 7 / 77%)", backdropFilter: "blur(22px)" }}
    >
      <nav
        className="mx-auto flex h-full items-center justify-between gap-[30px]"
        style={{ width: "min(1390px, 91%)" }}
        aria-label="Main navigation"
      >
        <Link href="/" className="inline-flex items-center gap-[9px] text-[18px] font-semibold tracking-[-0.6px]">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-[9px] text-sm font-bold text-[#160a12]"
            style={{ background: "var(--pink)", boxShadow: "inset 0 1px 2px rgb(255 255 255 / 55%)" }}
          >
            S
          </span>
          <span>
            Sedulus <span className="text-primary">POS</span>
          </span>
        </Link>

        <div className="ml-[8%] hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#a3a3aa] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/contact"
            className="text-[14px] font-medium text-primary-light transition-colors hover:text-white"
          >
            Request Demo
          </Link>
          <Link href="/contact" className="btn-primary min-h-[40px] gap-3 px-5 text-[13px]">
            Start Free Trial <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-transparent md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="block h-px w-4 bg-[#ece9ed] transition-transform"
            style={{ transform: mobileOpen ? "translateY(3.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-px w-4 bg-[#ece9ed] transition-transform"
            style={{ transform: mobileOpen ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-[71px] flex flex-col items-start gap-2 border-b border-[#3f2a39] bg-[#100d13] px-[6%] py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-11 w-full items-center text-[16px] text-[#a3a3aa] transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-3 w-full" onClick={() => setMobileOpen(false)}>
            Start Free Trial
          </Link>
        </div>
      )}
    </header>
  );
}
