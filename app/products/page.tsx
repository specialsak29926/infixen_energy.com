import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductsHero } from '@/components/sections/ProductsHero'
import { ProductsList } from '@/components/sections/ProductsList'
import { CTA } from '@/components/sections/CTA'

export const metadata = {
  title: 'Products & Solutions | Infixen Energy',
  description: 'Explore our range of waste-to-energy solutions including Nirvaan cremation systems, Biotherm sanitary waste disposal, sand thermal storage, and more.',
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <ProductsList />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
