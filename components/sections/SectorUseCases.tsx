'use client'

import { motion } from 'framer-motion'
import { sectorUseCases } from '@/lib/data'

export default function SectorUseCases() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4 text-center">
            Sector-Specific Agent Use Cases
          </h2>
          <p className="text-lg text-btrix-graphite mb-12 text-center max-w-2xl mx-auto">
            See how BTRIX AI agents work in different industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorUseCases.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-btrix-blue/5 to-btrix-neon/5 rounded-xl shadow-md hover:shadow-xl transition-all border border-btrix-silver/20 hover:border-btrix-neon/50 p-6 group relative overflow-hidden"
              >
                {/* Robot Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div className="w-full h-full robot-silhouette" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{sector.icon}</span>
                    <h3 className="text-xl font-display font-bold text-btrix-blue">
                      {sector.name}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {sector.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-btrix-graphite flex items-start gap-2">
                        <span className="text-btrix-neon mt-1">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

