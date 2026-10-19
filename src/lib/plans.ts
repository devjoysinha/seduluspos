// The published plans. Shared by the home page (first four features) and the pricing page (all of them).

export type Plan = {
  step: string;
  name: "Starter" | "Pro" | "Enterprise";
  price: string;
  period: string;
  description: string;
  featured: boolean;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    step: "01 / start small",
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For new restaurants getting started with digital billing.",
    featured: false,
    features: [
      "1 outlet, 1 device",
      "Basic POS billing",
      "KOT printing",
      "Daily sales reports",
      "GST invoicing",
      "Email support",
    ],
    cta: "Get Started Free",
  },
  {
    step: "02 / grow steadily",
    name: "Pro",
    price: "₹1,999",
    period: "/ month",
    description: "For growing restaurants that need full control.",
    featured: true,
    features: [
      "1 outlet, unlimited devices",
      "Kitchen Display System (KDS)",
      "Inventory management",
      "Swiggy & Zomato integration",
      "CRM & loyalty program",
      "Table & floor management",
      "Advanced analytics & P&L",
      "WhatsApp & SMS campaigns",
      "Priority phone & chat support",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    step: "03 / scale up",
    name: "Enterprise",
    price: "₹4,999",
    period: "/ outlet / month",
    description: "For chains and franchises with centralised management.",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited outlets",
      "Central menu & pricing control",
      "Franchise management",
      "Consolidated reporting",
      "Custom integrations & API access",
      "Dedicated account manager",
      "On-site training & setup",
      "99.99% SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

export const addons = [
  { name: "WhatsApp Business API", price: "₹499/mo" },
  { name: "Advanced CRM & Loyalty", price: "₹299/mo" },
  { name: "Self-Ordering Kiosk", price: "₹799/mo" },
  { name: "Dedicated Server Hosting", price: "₹999/mo" },
];
