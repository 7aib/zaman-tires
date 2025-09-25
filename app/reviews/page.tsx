import { Metadata } from 'next'
import ReviewsHero from '@/components/ReviewsHero'
import GoogleReviews from '@/components/GoogleReviews'
import ReviewStats from '@/components/ReviewStats'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Customer Reviews - 4.0★ Rating | Zaman Tyres Trader Wah Cantt',
  description: 'Read 62+ customer reviews for Zaman Tyres Trader in Wah Cantt. 4.0 star rating with testimonials about tire services, wheel alignment, and customer service.',
  openGraph: {
    title: 'Customer Reviews - 4.0★ Rating | Zaman Tyres Trader',
    description: 'Read customer reviews and testimonials for Zaman Tyres Trader in Wah Cantt.',
  },
}

export default function Reviews() {
  return (
    <>
      <ReviewsHero />
      <ReviewStats />
      <GoogleReviews />
      <CTASection />
    </>
  )
}
