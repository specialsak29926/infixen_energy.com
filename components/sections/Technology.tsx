'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, staggerItem, fadeInLeft } from '@/lib/animations'

const innovations = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Patented Gasifiers & Burners',
    description: 'Low-calorific-value premix burners and gasifiers designed for diverse waste streams.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Pelletization Units',
    description: 'Biomass and plastic pellet manufacturing for consistent fuel quality.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Modular Mobile Incinerators',
    description: 'Portable waste disposal solutions for remote and field applications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Sand Battery Storage',
    description: 'Thermal energy storage systems for extreme environments and off-grid applications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'CFD Simulation',
    description: 'Computational fluid dynamics integrated with real-world validation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Cremation Systems',
    description: 'Gasification-based eco-friendly cremation with low emissions.',
  },
]

const goals = [
  'Enable thermal decarbonization for hard-to-abate sectors',
  'Convert diverse waste streams into low-emission energy',
  'Replace fossil fuel-based systems with biomass and hybrid solutions',
]

export function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Technology
          </span>
          <h2 className="mt-4 text-4xl md:text-display-sm text-text-primary max-w-3xl mx-auto text-balance">
            Engineering innovation meets field validation
          </h2>
          <p className="mt-6 text-text-secondary text-body-lg max-w-2xl mx-auto">
            We combine engineering innovation, field validation, and simulation-driven
            design to develop efficient thermal systems.
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Visual/Diagram */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-square rounded-2xl overflow-hidden lg:sticky lg:top-32"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-background rounded-2xl border border-border">
              {/* Animated gasification visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer container */}
                <div className="relative w-72 h-72">
                  {/* Waste input indicator */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
                  >
                    <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="text-xs text-text-muted mt-1">Waste Input</span>
                  </motion.div>

                  {/* Main reactor chamber */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20"
                  />

                  {/* Inner chamber */}
                  <div className="absolute inset-16 rounded-full border border-primary/40 bg-primary/5" />

                  {/* Core heat */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-24 rounded-full bg-gradient-to-br from-orange-500/60 to-primary/40 blur-sm"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-28 rounded-full bg-orange-500/80"
                  />

                  {/* Energy output indicators */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center"
                  >
                    <span className="text-xs text-text-muted mr-1">Energy</span>
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    Gasification Technology
                  </div>
                  <div className="text-sm text-text-primary">
                    Converting waste to clean thermal energy through advanced gasification
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Innovations Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-text-primary mb-8"
            >
              Key Innovations
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {innovations.map((innovation) => (
                <motion.div
                  key={innovation.title}
                  variants={staggerItem}
                  className="group p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    {innovation.icon}
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-1">
                    {innovation.title}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {innovation.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20"
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Our Goals & Targets
              </h4>
              <ul className="space-y-3">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
