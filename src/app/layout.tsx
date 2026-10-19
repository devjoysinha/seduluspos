import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SceneBackdrop from "@/components/SceneBackdrop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sedulus.in"),
  title: {
    default: "Sedulus POS — Restaurant Billing & Management Software",
    template: "%s | Sedulus POS",
  },
  description:
    "Sedulus POS is India's leading restaurant billing software. Manage orders, kitchen display, inventory, online delivery integrations & GST billing — all from one platform. Start your free trial today.",
  keywords: [
    "restaurant POS",
    "restaurant billing software",
    "POS software India",
    "restaurant management system",
    "cloud POS",
    "kitchen display system",
    "GST billing software",
    "online order management",
    "food delivery integration",
    "restaurant inventory management",
    "table management software",
    "Sedulus POS",
  ],
  authors: [{ name: "Sedulus Technologies" }],
  creator: "Sedulus Technologies",
  publisher: "Sedulus Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sedulus.in",
    siteName: "Sedulus POS",
    title: "Sedulus POS — Restaurant Billing & Management Software",
    description:
      "India's smartest restaurant POS. Billing, KDS, inventory, delivery integrations & analytics in one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sedulus POS — Restaurant Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedulus POS — Restaurant Billing & Management Software",
    description:
      "India's smartest restaurant POS. Billing, KDS, inventory, delivery integrations & analytics in one platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sedulus.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sedulus POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description:
    "Restaurant billing and management software with POS, KDS, inventory, and delivery integrations.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "0",
    highPrice: "4999",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2500",
    bestRating: "5",
  },
  author: {
    "@type": "Organization",
    name: "Sedulus Technologies",
    url: "https://www.sedulus.in",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sedulus Technologies",
  url: "https://www.sedulus.in",
  logo: "https://www.sedulus.in/logo.png",
  sameAs: [
    "https://twitter.com/seduluspos",
    "https://linkedin.com/company/sedulus-technologies",
    "https://facebook.com/seduluspos",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9876543210",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dmMono.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#050607" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SceneBackdrop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
