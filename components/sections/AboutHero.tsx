'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp } from '@/lib/animations'

export function AboutHero() {
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
            About Us
          </span>
          <h1 className="mt-4 text-4xl md:text-display-md text-text-primary">
            Transforming waste into sustainable thermal energy
          </h1>
          <p className="mt-6 text-text-secondary text-body-lg max-w-2xl">
            Founded by domain experts in energy systems and waste valorization,
            Infixen Energy Pvt. Ltd. focuses on creating clean alternatives to
            fossil-fuel-based heat.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
