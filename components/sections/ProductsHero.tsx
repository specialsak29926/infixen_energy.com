'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp } from '@/lib/animations'

export function ProductsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Products & Solutions
          </span>
          <h1 className="mt-4 text-4xl md:text-display-md text-text-primary">
            Transforming waste into sustainable energy solutions
          </h1>
          <p className="mt-6 text-text-secondary text-body-lg max-w-2xl">
            From eco-friendly cremation systems to industrial thermal storage,
            our products address real-world energy and waste challenges across sectors.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
