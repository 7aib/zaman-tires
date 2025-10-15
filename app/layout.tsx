import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zamantyretrader.com"),
  title: {
    default: "Zaman Tyre Trader - Best Tire Shop in Wah Cantt, Pakistan",
    template: "%s | Zaman tyre Trader",
  },
  description:
    "Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands including Yokohama, Dunlop, Michelin. Call 0300 5888776",
  keywords: [
    "Zaman tyre Trader Wah Cantt",
    "tire shop in Wah Cantt",
    "best tires Wah Cantt",
    "tire shop in Taxila",
    "tire shop in Hassan Abdal",
    "tire shop in Rawalpindi",
    "tire shop in Islamabad",
    "auto repair Wah Cantt",
    "tire change Wah Cantt",
    "best tire shop Pakistan",
    "Yokohama tires Pakistan",
    "Dunlop tires Pakistan",
    "Michelin tires Pakistan",
    "wheel alignment Wah Cantt",
    "rims Wah Cantt",
    "tire shop GT Road",
  ],
  authors: [{ name: "Zaman Tyre Trader" }],
  creator: "Zohaib Shamshad",
  publisher: "Zohaib Shamshad",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zamantyretrader.com",
    title: "Zaman tyre Trader - Best Tire Shop in Wah Cantt, Pakistan",
    description:
      "Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands including Yokohama, Dunlop, Michelin.",
    siteName: "Zaman tyre Trader",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaman tyre Trader - Best Tire Shop in Wah Cantt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaman tyre Trader - Best Tire Shop in Wah Cantt, Pakistan",
    description:
      "Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://zamantyretrader.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Zaman tyre Trader",
  description:
    "Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services",
  url: "http://zamantyretrader.com",
  telephone: "+92-300-5888776",
  address: {
    "@type": "PostalAddress",
    streetAddress: "GT Rd, Peshawar Rd",
    addressLocality: "Cantt",
    addressRegion: "Hassan Abdal, Wah, Taxila, Islamabad, Rawalpindi",
    addressCountry: "Pakistan",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.7553,
    longitude: 72.74754,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "62",
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "PKR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="static/logo.jgp" type="image/png" />
        <link rel="apple-touch-icon" href="static/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
