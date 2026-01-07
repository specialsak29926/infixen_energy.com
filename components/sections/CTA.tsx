'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, glowPulse } from '@/lib/animations'

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Partner With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-display-md text-text-primary text-balance"
          >
            Ready to transform waste into energy?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-text-secondary text-body-lg max-w-2xl mx-auto"
          >
            Whether you&apos;re a municipality, industrial facility, or community
            organization, we have solutions tailored to your needs. Let&apos;s
            discuss how we can help you achieve your sustainability goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="/contact">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" href="/products">
              Explore Solutions
            </Button>
          </motion.div>

          {/* Key sectors */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {['Municipalities', 'Industries', 'Communities', 'Institutions', 'Government'].map(
              (sector) => (
                <span
                  key={sector}
                  className="px-4 py-2 rounded-full bg-background border border-border text-text-secondary text-sm hover:border-primary/50 hover:text-text-primary transition-colors duration-200 cursor-pointer"
                >
                  {sector}
                </span>
              )
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
