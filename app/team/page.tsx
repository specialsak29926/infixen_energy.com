import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TeamSection } from '@/components/sections/TeamSection'
import { CTA } from '@/components/sections/CTA'

export const metadata = {
  title: 'Our Team | Infixen Energy',
  description: 'Meet the founding team and advisors of Infixen Energy - domain experts in energy systems, waste valorization, and chemical engineering from IIT Bombay.',
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <TeamSection />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
