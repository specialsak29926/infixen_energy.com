'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'infixenenergy@gmail.com',
    href: 'mailto:infixenenergy@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 99879 95599',
    href: 'tel:+919987995599',
    secondary: '+91 84215 31699',
    secondaryHref: 'tel:+918421531699',
  },
]

const inquiryTypes = [
  'Product Inquiry',
  'Partnership Opportunities',
  'Technical Consultation',
  'Career Opportunities',
  'Media & Press',
  'General Inquiry',
]

export function ContactSection() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background min-h-screen">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="mt-4 text-4xl md:text-display-md text-text-primary">
                Let&apos;s discuss your energy needs
              </h1>
              <p className="mt-6 text-text-secondary text-body-lg">
                Whether you&apos;re interested in our solutions, exploring partnership
                opportunities, or have questions about our technology, we&apos;d love
                to hear from you.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-12 space-y-6"
            >
              {contactMethods.map((method) => (
                <motion.div
                  key={method.label}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{method.label}</p>
                    <a
                      href={method.href}
                      className="text-text-primary font-semibold hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                    {method.secondary && (
                      <a
                        href={method.secondaryHref}
                        className="block text-text-secondary hover:text-primary transition-colors"
                      >
                        {method.secondary}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Inquiry Types */}
            <AnimatedSection className="mt-12">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                How can we help?
              </h3>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Form */}
          <AnimatedSection delay={200}>
            <div className="p-8 rounded-2xl bg-surface border border-border">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Select an option</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-text-muted text-xs text-center">
                  By submitting this form, you agree to our privacy policy.
                  We&apos;ll respond within 2 business days.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
