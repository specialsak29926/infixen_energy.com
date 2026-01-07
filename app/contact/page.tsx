import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Contact Us | Infixen Energy',
  description: 'Get in touch with Infixen Energy. Email us at infixenenergy@gmail.com or call +91 99879 95599 for inquiries about our waste-to-energy solutions.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
