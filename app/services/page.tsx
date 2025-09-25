import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import DetailedServices from '@/components/DetailedServices'
import ServiceProcess from '@/components/ServiceProcess'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Tire Services in Wah Cantt - Tire Change, Wheel Alignment, Balancing | Zaman Tyres Trader',
  description: 'Professional tire services in Wah Cantt including tire change, wheel alignment, balancing, nitrogen air, oil change, and rims. Expert installation and quality assurance.',
  openGraph: {
    title: 'Professional Tire Services in Wah Cantt - Zaman Tyres Trader',
    description: 'Expert tire services including tire change, wheel alignment, balancing, and more in Wah Cantt.',
  },
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <DetailedServices />
      <ServiceProcess />
      <CTASection />
    </>
  )
}
