import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import BrandsSection from '@/components/BrandsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Tire Shop in Wah Cantt - Zaman Tyres Trader | 90+ Brands Available',
  description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services. 90+ tire brands including Yokohama, Dunlop, Michelin. Call 0300 5888776',
  openGraph: {
    title: 'Best Tire Shop in Wah Cantt - Zaman Tyres Trader',
    description: 'Leading tire shop in Wah Cantt offering premium tires, rims, wheel alignment, and automotive services.',
    images: ['/hero-tires.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
