import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Vision } from '@/components/sections/Vision'
import { Technology } from '@/components/sections/Technology'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <Technology />
        <TrustBadges />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
