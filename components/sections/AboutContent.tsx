'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, staggerItem } from '@/lib/animations'

const offerings = [
  {
    title: 'Scalable Energy Solutions',
    description: 'From small-scale community installations to large industrial deployments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: 'Decentralized Thermal Systems',
    description: 'Bringing energy solutions directly to communities and industrial sites.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Clean Fossil-Fuel Alternatives',
    description: 'Replacing conventional thermal systems with sustainable waste-to-energy solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const sectors = [
  'Rural communities',
  'Industrial facilities',
  'Urban municipalities',
  'Government projects',
]

const visionPoints = [
  'Lead the transition to clean thermal energy through innovation',
  'Build circular energy ecosystems from local solid waste',
  'Become a preferred solution provider in sustainable heat technologies',
]

const missionPoints = [
  'Reduce dependence on fossil fuels for industrial applications',
  'Promote government initiatives like Swachh Bharat Abhiyan',
  'Enable waste-to-energy solutions for mixed waste',
]

export function AboutContent() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        {/* What We Provide */}
        <AnimatedSection className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                What We Provide
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
                Comprehensive thermal energy solutions
              </h2>
              <p className="mt-4 text-text-secondary text-body-md">
                We serve rural, industrial, and urban municipal sectors, addressing
                real-world energy and waste challenges with innovative technology
                and proven solutions.
              </p>

              {/* Sectors */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                  Sectors We Serve
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-4 py-2 rounded-full bg-background border border-border text-text-secondary text-sm"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {offerings.map((offering) => (
                <motion.div
                  key={offering.title}
                  variants={staggerItem}
                  className="p-6 rounded-xl bg-background border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {offering.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {offering.title}
                      </h3>
                      <p className="mt-1 text-text-secondary text-sm">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <AnimatedSection>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Vision</h3>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={200}>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
