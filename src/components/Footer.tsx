import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features#integrations", label: "Integrations" },
    { href: "/features#kds", label: "Kitchen Display" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
  ],
  Support: [
    { href: "/contact", label: "Help Center" },
    { href: "/contact", label: "Request Demo" },
    { href: "#", label: "API Docs" },
    { href: "#", label: "Status" },
  ],
};

export default function Footer() {
  return (
    <footer className="mx-auto w-[min(1280px,88%)] border-t border-white/10">
      <div className="grid gap-12 py-12 md:grid-cols-[1.1fr_2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.6px]">
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
          <p className="micro mt-5 flex items-center gap-2">
            <span className="status-dot" style={{ width: 4, height: 4 }} />
            made to keep restaurants running.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer navigation">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h2 className="micro mb-4 text-[#a58ba0]">{group.toLowerCase()}</h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#9a8b96] transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="micro flex flex-col gap-3 border-t border-white/[0.06] py-6 text-[#8a7f8a] sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 Sedulus Technologies Pvt. Ltd.</span>
        <Link href="#top" className="text-[#b196a8] transition-colors hover:text-primary">
          back to the beginning &uarr;
        </Link>
      </div>
    </footer>
  );
}
