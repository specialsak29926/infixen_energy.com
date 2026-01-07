import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Infixen Energy | Redefining Waste. Reimagining Energy.',
  description:
    'Infixen Energy develops scalable, decentralized, and clean thermal energy solutions by converting waste into usable energy for industries, communities, and municipalities.',
  keywords: [
    'waste to energy',
    'gasification',
    'thermal energy',
    'clean energy',
    'sustainable energy',
    'biomass',
    'waste management',
    'cremation system',
    'sanitary waste disposal',
    'Infixen Energy',
  ],
  authors: [{ name: 'Infixen Energy Pvt. Ltd.' }],
  openGraph: {
    title: 'Infixen Energy | Redefining Waste. Reimagining Energy.',
    description:
      'Scalable, decentralized, and clean thermal energy solutions by converting waste into usable energy.',
    url: 'https://infixenenergy.com',
    siteName: 'Infixen Energy',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infixen Energy | Redefining Waste. Reimagining Energy.',
    description:
      'Scalable, decentralized, and clean thermal energy solutions by converting waste into usable energy.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
