'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: '❌',
    text: 'We are not an agency',
  },
  {
    icon: '❌',
    text: 'We do not sell isolated tools',
  },
  {
    icon: '❌',
    text: 'We do not provide traditional consulting',
  },
  {
    icon: '✅',
    text: 'AI-powered business operating systems',
  },
  {
    icon: '✅',
    text: 'Automation that actually runs',
  },
  {
    icon: '✅',
    text: 'Full integration between channels, data and intelligence',
  },
]

export default function About() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Robot Silhouette */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-5">
        <Image
          src="/images/robot-factory.png"
          alt="BTRIX AI Robot"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-6">
                What is BTRIX
              </h2>
              
              <p className="text-lg text-btrix-graphite mb-6 leading-relaxed">
                BTRIX is a company specialized in intelligent business automation.
                We design and deploy AI-powered operating systems that unify communication channels, data, automation and specialized AI agents into a single operational structure.
              </p>

              <div className="bg-gradient-to-r from-btrix-neon/10 to-btrix-accent/10 border-l-4 border-btrix-neon p-6 rounded-r-lg">
                <p className="text-btrix-graphite font-semibold text-lg">
                  BTRIX exists to solve a critical problem:
                  <br />
                  <span className="text-btrix-blue">businesses lose money when their systems don&apos;t work together.</span>
                </p>
              </div>
            </div>

            {/* Robot Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/robot-warehouse.png"
                alt="BTRIX AI Robot Working"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full mb-4">
              <h3 className="text-2xl font-display font-bold text-btrix-blue mb-4">What BTRIX Is NOT</h3>
            </div>
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-xl border border-red-200/50 hover:border-red-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <p className="text-btrix-graphite font-medium text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <div className="col-span-full mt-4 mb-4">
              <h3 className="text-2xl font-display font-bold text-btrix-blue mb-4">What BTRIX DELIVERS</h3>
            </div>
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-btrix-neon/10 to-btrix-accent/10 p-6 rounded-xl border border-btrix-neon/30 hover:border-btrix-neon/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <p className="text-btrix-graphite font-medium text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
