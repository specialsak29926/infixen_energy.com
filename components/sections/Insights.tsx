'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { staggerContainer, staggerItem } from '@/lib/animations'

const articles = [
  {
    category: 'Research',
    title: 'Breaking the Q=1 barrier: Our path to net energy gain',
    excerpt:
      'A deep dive into the plasma physics breakthroughs that enabled our latest milestone in fusion energy output.',
    date: 'Dec 2025',
    readTime: '8 min read',
  },
  {
    category: 'Press',
    title: 'Infixen raises $150M Series C to accelerate commercial deployment',
    excerpt:
      'New funding will support construction of our pilot plant and expansion of our world-class team.',
    date: 'Nov 2025',
    readTime: '4 min read',
  },
  {
    category: 'Technology',
    title: 'High-temperature superconductors: The key to compact fusion',
    excerpt:
      'How advances in HTS magnets are making fusion reactors smaller, cheaper, and faster to build.',
    date: 'Oct 2025',
    readTime: '6 min read',
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <AnimatedSection>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Insights
            </span>
            <h2 className="mt-4 text-4xl md:text-display-sm text-text-primary">
              Perspectives & Press
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Button variant="outline" size="md" href="#insights">
              View All Articles
            </Button>
          </AnimatedSection>
        </div>

        {/* Articles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={staggerItem}
              className="group relative flex flex-col p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Category & Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {article.category}
                </span>
                <span className="text-text-muted text-xs">{article.date}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-text-secondary text-sm flex-grow mb-6">
                {article.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-text-muted text-xs">{article.readTime}</span>
                <motion.span
                  className="text-primary text-sm font-medium flex items-center gap-1"
                  whileHover={{ x: 4 }}
                >
                  Read more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.span>
              </div>

              {/* Clickable overlay */}
              <a href="#" className="absolute inset-0" aria-label={`Read: ${article.title}`} />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
