'use client'

import { motion } from 'framer-motion'
import { bundles } from '@/lib/data'

export default function Bundles() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
            Bundles
          </h2>
          <p className="text-lg text-btrix-graphite mb-12 text-center">
            Packs + AI Agents
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-btrix-blue/5 to-btrix-neon/5 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden group ${
                  bundle.bestSeller ? 'border-btrix-neon scale-105' : 'border-btrix-silver/20'
                }`}
              >
                {bundle.bestSeller && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-btrix-neon text-btrix-blue px-4 py-1 rounded-full text-sm font-semibold z-20">
                    ⭐ Best Seller
                  </div>
                )}

                {/* Robot Image Background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-full h-full robot-silhouette" />
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-display font-bold text-btrix-blue mb-6">
                    {bundle.name}
                  </h3>

                  <div className="mb-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-btrix-blue mb-2">Pack included</p>
                      <p className="text-sm text-btrix-graphite">
                        {bundle.pack.name} (Setup €{bundle.pack.setup.toLocaleString()} | Monthly €{bundle.pack.monthly.toLocaleString()})
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-btrix-blue mb-2">Agents included</p>
                      <ul className="space-y-1">
                        {bundle.agents.map((agent) => (
                          <li key={agent.id} className="text-sm text-btrix-graphite flex items-center gap-2">
                            <span>{agent.emoji}</span>
                            <span>{agent.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-btrix-silver/20 pt-6 mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-lg font-semibold text-btrix-blue">Monthly:</span>
                      <span className="text-3xl font-bold text-btrix-neon">€{bundle.monthlyPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-btrix-graphite mb-2">
                      (instead of €{bundle.separatePrice.toLocaleString()} separate)
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      Savings: €{bundle.savings.toLocaleString()}/month
                    </p>
                  </div>

                  <p className="text-sm text-btrix-graphite mb-6 leading-relaxed">
                    {bundle.benefit}
                  </p>

                  <button
                    onClick={scrollToContact}
                    className="w-full bg-btrix-neon text-btrix-blue px-6 py-3 rounded-lg font-semibold hover:bg-btrix-accent transition-all transform hover:scale-105"
                  >
                    I want this bundle
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
