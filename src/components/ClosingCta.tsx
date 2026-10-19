import Link from "next/link";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";

type Action = { href: string; label: string };

// The closing pair from the reference: a quiet brand card beside a loud pink call to action.
export default function ClosingCta({
  label,
  title,
  accent,
  copy,
  primary,
  secondary,
  footnote,
}: {
  label: string;
  title: string;
  accent: string;
  copy: string;
  primary: Action;
  secondary?: Action;
  footnote: string;
}) {
  return (
    <Reveal as="section" className="closing-section section-shell">
      <div className="closing-brand glass-panel">
        <Link className="wordmark" href="/">
          <BrandMark />
          <span>
            Sedulus <span className="wordmark-sub">POS</span>
          </span>
        </Link>
        <p>
          Good restaurants deserve{" "}
          <br />a smarter system.
        </p>
        <span className="micro">built for the space between your kitchen and your counter.</span>
        <div className="brand-sculpture" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="closing-cta">
        <span className="micro">{label}</span>
        <h2>
          {title}
          <br />
          <em>{accent}</em>
        </h2>
        <p className="closing-copy">{copy}</p>
        <div className="closing-actions">
          <Link className="button button--dark" href={primary.href}>
            {primary.label} <span aria-hidden="true">↗</span>
          </Link>
          {secondary && (
            <Link className="button button--outline-dark" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
        <span className="micro">{footnote}</span>
      </div>
    </Reveal>
  );
}
