'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  'Intelligent kiosks',
  'AI avatars',
  'Integrated payments',
  'Sector-specific automation systems (restaurants, salons, offices, clinics, logistics)',
]

export default function Future() {
  return (
    <section id="future" className="py-20 bg-gradient-to-br from-btrix-blue via-btrix-graphite to-btrix-blue text-white relative overflow-hidden">
      {/* Background Robot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-10">
        <Image
          src="/images/robot-spa.png"
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-center">
            Future Vision — BTRIX 360°
          </h2>
          
          <p className="text-xl text-btrix-silver mb-12 text-center leading-relaxed">
            BTRIX is evolving into a full 360° automation ecosystem, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-btrix-neon/30 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-btrix-neon/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-btrix-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-btrix-silver text-lg leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-btrix-silver/80 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-btrix-neon/20"
          >
            This roadmap is built on a solid operational foundation already running today, ensuring long-term scalability and technological leadership.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
