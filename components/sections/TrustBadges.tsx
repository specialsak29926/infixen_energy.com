'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, staggerItem } from '@/lib/animations'

const associations = [
  { name: 'IIT Bombay', initial: 'IITB' },
  { name: 'Department of Energy', initial: 'DOE' },
  { name: 'Swachh Bharat', initial: 'SB' },
  { name: 'CPCB Certified', initial: 'CPCB' },
]

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'IIT Bombay Incubated',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Patented Technology',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'CPCB Compliant',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Field Validated',
  },
]

export function TrustBadges() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <span className="text-text-muted text-sm uppercase tracking-wider">
            Trusted & Validated
          </span>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
        >
          {associations.map((association) => (
            <motion.div
              key={association.name}
              variants={staggerItem}
              className="group flex items-center justify-center p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 bg-surface/50 transition-all duration-300 hover:bg-surface"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-text-muted/10 flex items-center justify-center text-text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 font-bold text-sm">
                  {association.initial}
                </div>
                <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300 font-medium text-sm text-center">
                  {association.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {credentials.map((credential) => (
            <div key={credential.label} className="flex items-center gap-2 text-text-secondary text-sm">
              {credential.icon}
              <span>{credential.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
