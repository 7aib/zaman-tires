import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zaman Tyres Trader - Best Tire Shop in Wah Cantt, Pakistan',
    template: '%s | Zaman Tyres Trader'
  },
  description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands including Yokohama, Dunlop, Michelin. Call 0300 5888776',
  keywords: [
    'Zaman Tyres Trader Wah Cantt',
    'tire shop in Wah Cantt',
    'tire change Wah Cantt',
    'best tire shop Pakistan',
    'Yokohama tires Pakistan',
    'Dunlop tires Pakistan',
    'Michelin tires Pakistan',
    'wheel alignment Wah Cantt',
    'rims Wah Cantt',
    'tire shop GT Road Cantt'
  ],
  authors: [{ name: 'Zaman Tyres Trader' }],
  creator: 'Zohaib Shamshad',
  publisher: 'Zohaib Shamshad',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zaman-tyres-trader.com',
    title: 'Zaman Tyres Trader - Best Tire Shop in Wah Cantt, Pakistan',
    description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands including Yokohama, Dunlop, Michelin.',
    siteName: 'Zaman Tyres Trader',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaman Tyres Trader - Best Tire Shop in Wah Cantt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaman Tyres Trader - Best Tire Shop in Wah Cantt, Pakistan',
    description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://zaman-tyres-trader.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Zaman Tyres Trader',
  description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services',
  url: 'https://zaman-tyres-trader.com',
  telephone: '+92-300-5888776',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'GT Rd',
    addressLocality: 'Cantt',
    addressRegion: 'Wah',
    addressCountry: 'Pakistan'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7741,
    longitude: 72.7581
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday', 
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '09:00',
    closes: '21:00'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.0',
    reviewCount: '62'
  },
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'PKR'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
  )
}
