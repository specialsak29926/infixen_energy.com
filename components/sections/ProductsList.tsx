'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { staggerContainer, staggerItem } from '@/lib/animations'

const products = [
  {
    id: 'nirvaan',
    name: 'Nirvaan',
    tagline: 'Eco-friendly Cremation System',
    subtitle: 'Making the last journey eco-friendly',
    description: 'Biomass gasifier-based cremation system with low emissions and high thermal efficiency.',
    problems: [
      'Deforestation from traditional cremation',
      'High emissions and air pollution',
      'High operational costs',
      'Low social acceptance of modern systems',
    ],
    features: [
      { label: 'Cremation Time', value: '1-1.5 hours' },
      { label: 'Flame Temperature', value: '> 900°C' },
      { label: 'Carbon Monoxide', value: '< 50 ppm' },
      { label: 'Visible Smoke', value: 'None' },
    ],
    benefits: ['Trees saved', 'Low emissions', 'Thermally efficient', 'Socially accepted', 'Lower operational cost'],
    color: 'from-orange-500/20 to-primary/20',
  },
  {
    id: 'biotherm',
    name: 'Biotherm',
    tagline: 'Sanitary Waste Disposal Machine',
    subtitle: 'Ultra-low emission incineration solution',
    description: 'An ultra-low emission incineration solution for sanitary and biomedical waste.',
    problems: [
      'Sanitary waste disposal challenges',
      'Biomedical waste management',
      'Indoor air quality concerns',
      'CPCB compliance requirements',
    ],
    features: [
      { label: 'Combustion Stages', value: '3-stage system' },
      { label: 'Emission Control', value: 'Secondary thermal heater' },
      { label: 'Operation', value: 'Complete combustion' },
      { label: 'Compliance', value: 'CPCB-compliant' },
    ],
    benefits: ['Low emissions', 'Faster operation', 'Indoor-safe usage', 'Reduced maintenance cost'],
    color: 'from-blue-500/20 to-primary/20',
  },
  {
    id: 'sand-storage',
    name: 'Sand Thermal Storage Unit',
    tagline: 'Thermal Energy Storage',
    subtitle: 'Heat storage for extreme environments',
    description: 'A thermal energy storage solution designed for extreme cold environments like Indian Army deployments in Ladakh.',
    problems: [
      'Limited electricity in remote areas',
      'Kerosene heater safety risks',
      'Night-time heating requirements',
      'Harsh environmental conditions',
    ],
    features: [
      { label: 'Heat Capture', value: 'Daytime storage' },
      { label: 'Heat Release', value: 'Night-time output' },
      { label: 'Safety', value: 'No fire hazard' },
      { label: 'Maintenance', value: 'Low requirement' },
    ],
    benefits: ['Safe operation', 'Low maintenance', 'Cost-effective', 'Reliable heating'],
    color: 'from-yellow-500/20 to-primary/20',
  },
  {
    id: 'torrefaction',
    name: 'Biomass Torrefaction & Pelletization',
    tagline: 'Alternative Solid Fuel',
    subtitle: 'High-energy-density fuel production',
    description: 'An alternative solid fuel solution for industries producing high-energy-density torrefied biomass pellets.',
    problems: [
      'High fossil fuel costs',
      'Inconsistent biomass quality',
      'Storage and handling challenges',
      'Lower energy density of raw biomass',
    ],
    features: [
      { label: 'Process', value: 'Shredding & pelletization' },
      { label: 'Technology', value: 'Vertical split tube furnace' },
      { label: 'Output', value: 'Torrefied pellets' },
      { label: 'Result', value: 'Reduced fuel cost' },
    ],
    benefits: ['Higher energy density', 'Better storage', 'Consistent quality', 'Industrial-ready'],
    color: 'from-green-500/20 to-primary/20',
  },
  {
    id: 'cooking',
    name: 'Gasification-Based Cooking Systems',
    tagline: 'Institutional Kitchen Solutions',
    subtitle: 'Steam cooking with biomass pellets',
    description: 'Deployed in institutional kitchens for steam cooking, delivering significant LPG and CO2 savings.',
    problems: [
      'High LPG costs for institutions',
      'Carbon emissions from cooking',
      'Fuel availability issues',
      'Rising energy costs',
    ],
    features: [
      { label: 'Daily Pellet Usage', value: '~35 kg/day' },
      { label: 'LPG Savings', value: '~10 kg/day' },
      { label: 'Daily CO2 Reduction', value: '~40 kg/day' },
      { label: 'Annual CO2 Reduction', value: '~10.5 tons' },
    ],
    benefits: ['Significant cost savings', 'Reduced emissions', 'Reliable fuel supply', 'Easy operation'],
    color: 'from-purple-500/20 to-primary/20',
  },
  {
    id: 'sanitary-cogasification',
    name: 'Co-Gasification of Sanitary Waste',
    tagline: 'Menstrual Waste Management',
    subtitle: 'Sustainable sanitary waste solution',
    description: 'A sustainable solution for menstrual waste management through co-gasification with biomass pellets.',
    problems: [
      'Menstrual waste disposal challenges',
      'Landfill accumulation',
      'Water contamination risks',
      'Health hazards',
    ],
    features: [
      { label: 'Process', value: 'Co-gasification' },
      { label: 'Fuel Mix', value: 'Biomass pellets' },
      { label: 'Application', value: 'Institutional environments' },
      { label: 'Validation', value: 'Proven feasibility' },
    ],
    benefits: ['Reduced landfill', 'Water safety', 'Health protection', 'Sustainable disposal'],
    color: 'from-pink-500/20 to-primary/20',
  },
]

export function ProductsList() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-24"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              variants={staggerItem}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Product Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${product.color} border border-border`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-background/50 backdrop-blur flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">{product.name}</h3>
                      <p className="text-text-secondary mt-1">{product.tagline}</p>
                    </div>
                  </div>

                  {/* Features overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border"
                        >
                          <div className="text-xs text-text-muted">{feature.label}</div>
                          <div className="text-sm font-semibold text-text-primary">{feature.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-text-primary">
                  {product.name}
                </h2>
                <p className="mt-2 text-xl text-text-secondary">{product.subtitle}</p>
                <p className="mt-4 text-text-secondary">{product.description}</p>

                {/* Problems Addressed */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                    Problems Addressed
                  </h4>
                  <ul className="space-y-2">
                    {product.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3 text-text-secondary text-sm">
                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                    Key Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
