'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  'Never lose leads',
  'Automate customer support and operations',
  'Centralize and organize data',
  'Make better decisions with AI',
  'Scale without hiring more people',
]

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-btrix-blue/10 via-btrix-neon/5 to-btrix-blue/10 relative overflow-hidden">
      {/* Background Robot Pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block opacity-5">
        <Image
          src="/images/robot-cafe.png"
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4">
            Why companies choose BTRIX
          </h2>

          <p className="text-xl text-btrix-graphite mb-12 max-w-2xl mx-auto">
            BTRIX helps companies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-btrix-silver/20 hover:border-btrix-neon/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-btrix-neon/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-btrix-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-btrix-graphite font-semibold text-lg">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xl text-btrix-graphite max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-btrix-neon/30">
              Everything runs 24/7, with intelligent AI support and human escalation only when necessary.
            </p>
            <div className="bg-gradient-to-r from-btrix-neon/20 to-btrix-accent/20 border-2 border-btrix-neon/50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-2xl font-display font-bold text-btrix-blue">
                The result:
              </p>
              <p className="text-lg text-btrix-graphite mt-2">
                less operational friction, more control and faster growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
