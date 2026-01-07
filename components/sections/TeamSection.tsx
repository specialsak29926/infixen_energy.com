'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

const founders = [
  {
    name: 'Dr. Sujeet Deore',
    role: 'Director',
    credential: 'Post Doctoral Fellow, Energy Science, IIT Bombay',
    image: '/images/team/sujeet-deore.jpg',
    linkedin: '#',
  },
  {
    name: 'Prabodh Gadkari',
    role: 'Director',
    credential: 'Project Manager, Department of Chemical Engineering, IIT Bombay',
    image: '/images/team/prabodh-gadkari.jpg',
    linkedin: '#',
  },
]

const advisors = [
  {
    name: 'Prof. Sandeep Kumar',
    role: 'Technical Advisor & Co-founder',
    credential: 'Assistant Professor, Energy Science, IIT Bombay',
    image: '/images/team/sandeep-kumar.jpg',
    linkedin: '#',
  },
  {
    name: 'Prof. Sanjay Mahajani',
    role: 'Technical Advisor',
    credential: 'Senior Professor, Chemical Engineering, IIT Bombay',
    image: '/images/team/sanjay-mahajani.jpg',
    linkedin: '#',
  },
]

interface Person {
  name: string
  role: string
  credential: string
  image: string
  linkedin: string
}

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-surface-light to-surface border border-border">
        {/* Photo or Placeholder */}
        <div className="absolute inset-0">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Hide image on error, fallback will show
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : null}

          {/* Fallback placeholder with initials */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-light to-surface">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">
                {person.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Info overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <a
            href={person.linkedin}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Info below card */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-text-primary">{person.name}</h3>
        <p className="text-primary font-medium">{person.role}</p>
        <p className="mt-1 text-text-secondary text-sm">{person.credential}</p>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Team
          </span>
          <h1 className="mt-4 text-4xl md:text-display-md text-text-primary">
            Meet the experts driving clean energy innovation
          </h1>
          <p className="mt-6 text-text-secondary text-body-lg">
            Our team combines deep expertise in energy systems, waste valorization,
            and chemical engineering from IIT Bombay.
          </p>
        </motion.div>

        {/* Founding Team */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary">Founding Team</h2>
            <p className="mt-2 text-text-secondary">
              Domain experts leading Infixen Energy&apos;s mission
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-2xl"
          >
            {founders.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </motion.div>
        </div>

        {/* Advisors */}
        <div>
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary">Advisors</h2>
            <p className="mt-2 text-text-secondary">
              World-class academics guiding our technical direction
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-2xl"
          >
            {advisors.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </motion.div>
        </div>

        {/* IIT Bombay Association */}
        <AnimatedSection className="mt-20">
          <div className="p-8 rounded-2xl bg-surface border border-border text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              IIT Bombay Association
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our team brings together expertise from IIT Bombay&apos;s Energy Science
              and Chemical Engineering departments, combining academic rigor with
              real-world application.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
