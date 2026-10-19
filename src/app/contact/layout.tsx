import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Demo or Start Free Trial",
  description:
    "Request a free demo, start your 14-day trial, or talk to our sales team. Call +91 8420117725 or fill out the form and we'll get back within 2 hours.",
  alternates: { canonical: "https://www.sedulus.in/contact" },
  openGraph: {
    title: "Contact — Sedulus POS",
    description:
      "Request a free demo or start your 14-day trial. Our team responds within 2 hours.",
    url: "https://www.sedulus.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
