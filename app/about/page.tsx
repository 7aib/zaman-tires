import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Zaman Tyres Trader - Trusted Tire Shop in Wah Cantt, Pakistan',
  description: 'Learn about Zaman Tyres Trader, Wah Cantt\'s most trusted tire shop. Over 90+ tire brands, expert services, and years of experience serving the community.',
  openGraph: {
    title: 'About Zaman Tyres Trader - Trusted Tire Shop in Wah Cantt',
    description: 'Learn about Zaman Tyres Trader, Wah Cantt\'s most trusted tire shop with over 90+ tire brands.',
  },
}

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <TeamSection />
      <CTASection />
    </>
  )
}
