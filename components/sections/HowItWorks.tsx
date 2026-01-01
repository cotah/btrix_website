'use client'

import { motion } from 'framer-motion'
import { steps } from '@/lib/data'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Robot Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full overflow-hidden">
          <Image
            src="/images/robot-salon.png"
            alt="BTRIX AI Robot"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full overflow-hidden">
          <Image
            src="/images/robot-bike-shop.png"
            alt="BTRIX AI Robot"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4 text-center">
            How It Works
          </h2>
          <p className="text-lg text-btrix-graphite mb-12 text-center max-w-2xl mx-auto">
            Intelligent automation in 4 steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-btrix-blue/10 to-btrix-neon/10 p-6 rounded-xl border border-btrix-silver/20 hover:border-btrix-neon/50 transition-all hover:shadow-lg h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-btrix-neon text-btrix-blue rounded-full flex items-center justify-center font-display font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-bold text-btrix-blue mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-btrix-graphite">
                    {step.description}
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
