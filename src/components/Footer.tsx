import Link from "next/link";
import OpenStatusButton from "./OpenStatusButton";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <span className="micro">
          <span className="status-dot" /> made to keep restaurants running.
        </span>
        <nav aria-label="Footer navigation">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/features#integrations">Integrations</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <OpenStatusButton />
        </nav>
      </div>
      <div className="footer-bottom micro">
        <span>© 2026 Sedulus Technologies Pvt. Ltd.</span>
        <a href="#top">back to the beginning ↑</a>
      </div>
    </footer>
  );
}
