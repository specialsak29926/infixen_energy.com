'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, staggerItem } from '@/lib/animations'

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Industrial Process Heat',
    description: 'Clean thermal energy solutions for manufacturing and industrial applications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Urban & Rural Communities',
    description: 'Decentralized energy systems for sustainable community development.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: 'Municipal Waste Management',
    description: 'Converting municipal solid waste into valuable thermal energy.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Clean Infrastructure',
    description: 'Building sustainable thermal infrastructure for a greener future.',
  },
]

const impacts = [
  { value: 'Zero', label: 'Fossil Fuel Dependence', description: 'Replace fossil fuel-based thermal systems' },
  { value: '100%', label: 'Waste Utilization', description: 'Convert mixed waste streams into energy' },
  { value: 'Net', label: 'Carbon Reduction', description: 'Enable thermal decarbonization' },
]

export function Vision() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <Container>
        {/* What We Do */}
        <div className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-4 text-4xl md:text-display-sm text-text-primary max-w-4xl mx-auto text-balance">
              Gasification-based thermal energy technologies for waste-to-energy conversion
            </h2>
            <p className="mt-6 text-text-secondary text-body-lg max-w-2xl mx-auto">
              Infixen Energy specializes in gasification-based thermal energy technologies
              that enable waste-to-energy conversion with low emissions and high efficiency.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={staggerItem}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Impact */}
        <div className="pt-16 border-t border-border">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Impact
            </span>
            <h2 className="mt-4 text-3xl md:text-display-sm text-text-primary">
              Driving the transition to clean thermal energy
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {impacts.map((impact) => (
              <motion.div
                key={impact.label}
                variants={staggerItem}
                className="text-center p-8 rounded-2xl bg-surface border border-border"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {impact.value}
                </div>
                <div className="text-text-primary font-semibold mb-2">
                  {impact.label}
                </div>
                <p className="text-text-secondary text-sm">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Impact Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              'Support circular energy ecosystems',
              'Hard-to-abate sector solutions',
              'Low emission technologies',
            ].map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-text-secondary text-sm"
              >
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
