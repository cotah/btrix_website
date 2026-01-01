'use client'

import { motion } from 'framer-motion'
import { packs } from '@/lib/data'
import Image from 'next/image'

export default function Packs() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-btrix-blue/5 to-btrix-graphite/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4 text-center">
            Service Packs
          </h2>
          <p className="text-lg text-btrix-graphite mb-12 text-center max-w-2xl mx-auto">
            Choose the pack that fits your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(packs).map((pack, index) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 ${
                  'recommended' in pack && pack.recommended ? 'border-btrix-neon scale-105 lg:scale-110' : 'border-btrix-silver/20'
                } overflow-hidden group`}
              >
                {'recommended' in pack && pack.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-btrix-neon text-btrix-blue px-4 py-1 rounded-full text-sm font-semibold z-20">
                    ⭐ Most Popular
                  </div>
                )}
                
                {/* Robot Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pack.image || '/images/robot-office.png'}
                    alt={`${pack.name} - BTRIX AI Robot`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-btrix-blue/80 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-btrix-blue mb-4">
                    {pack.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-btrix-graphite">Setup:</span>
                      <span className="text-2xl font-bold text-btrix-blue">€{pack.setup.toLocaleString()}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-btrix-graphite">Monthly:</span>
                      <span className="text-2xl font-bold text-btrix-neon">€{pack.monthly.toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="text-btrix-graphite mb-6 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="space-y-3 border-t border-btrix-silver/20 pt-6">
                    <div>
                      <p className="text-sm font-semibold text-btrix-blue mb-1">Best for</p>
                      <p className="text-sm text-btrix-graphite">{pack.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-btrix-blue mb-1">Main benefit</p>
                      <p className="text-sm text-btrix-graphite">{pack.mainBenefit}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-btrix-blue mb-1">Ideal for</p>
                      <p className="text-sm text-btrix-graphite">{pack.idealFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
