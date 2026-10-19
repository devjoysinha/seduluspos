import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";

export function Shot({
  label,
  status,
  src,
  alt,
  sizes,
}: {
  label: string;
  status: string;
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <figure className="glass-panel h-full overflow-hidden">
      <figcaption className="micro flex items-center justify-between border-b border-white/5 px-5 py-3">
        <span>
          <span className="mr-1.5 text-[#8f7e8c]">#</span>
          {label}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="status-dot" style={{ width: 4, height: 4 }} />
          {status}
        </span>
      </figcaption>
      <Image src={src} alt={alt} width={800} height={600} sizes={sizes} className="block h-auto w-full" />
    </figure>
  );
}

export function SectionHead({
  eyebrow,
  title,
  accent,
  aside,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  aside?: ReactNode;
  as?: "h1" | "h2";
}) {
  const size = Tag === "h1" ? "text-[clamp(42px,5vw,68px)]" : "text-[clamp(34px,3.8vw,54px)]";
  return (
    <RevealOnScroll>
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="eyebrow mb-6 flex w-fit">
            <span className="status-dot" /> {eyebrow}
          </span>
          <Tag className={`${size} font-medium leading-[1.08] tracking-[-0.045em]`}>
            {title}
            <br />
            <em className="text-[1.1em] tracking-[-0.035em]">{accent}</em>
          </Tag>
        </div>
        {aside && <p className="max-w-[340px] shrink-0 text-[14px] leading-[1.8] text-[#938c94]">{aside}</p>}
      </div>
    </RevealOnScroll>
  );
}

export function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function PinkCta({
  label,
  title,
  accent,
  children,
  primary,
  secondary,
}: {
  label: string;
  title: string;
  accent: string;
  children: ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <RevealOnScroll>
      <section className="mx-auto w-[min(1280px,88%)] pb-24 pt-10">
        <div className="grid items-center gap-8 rounded-[15px] border border-[#ffa4d8] bg-primary p-8 text-[#291020] md:grid-cols-[1.5fr_1fr] md:p-12">
          <div>
            <span className="mono block text-[11px] tracking-wide text-[#5a1c41]">{label}</span>
            <h2 className="mb-4 mt-5 text-[clamp(32px,3.6vw,48px)] font-medium leading-[1.08] tracking-[-0.045em]">
              {title}
              <br />
              <em className="text-[1.1em]">{accent}</em>
            </h2>
            <p className="max-w-[480px] text-[15px] leading-[1.7] text-[#4a1735]">{children}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={primary.href}
              className="inline-flex min-h-[46px] items-center justify-center gap-4 rounded-full bg-[#100b10] px-7 text-[14px] font-semibold text-[color:var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              {primary.label} <span aria-hidden="true">&#8599;</span>
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#291020]/35 px-7 text-[14px] font-semibold text-[#291020] transition-colors hover:bg-[#291020]/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
