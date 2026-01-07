import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/sections/AboutHero'
import { AboutContent } from '@/components/sections/AboutContent'
import { CTA } from '@/components/sections/CTA'

export const metadata = {
  title: 'About Us | Infixen Energy',
  description: 'Learn about Infixen Energy - founded by domain experts in energy systems and waste valorization, transforming waste into sustainable thermal energy.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
