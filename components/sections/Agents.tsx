'use client'

import { motion } from 'framer-motion'
import { agents } from '@/lib/data'

const rules = [
  'Agents are add-ons',
  'Require an active BTRIX pack',
  'Are not humans',
  'Do not provide consulting',
  'Do not join meetings',
  'Fully integrated into the BTRIX operating system',
]

export default function Agents() {
  return (
    <section className="py-20 bg-gradient-to-br from-btrix-blue/5 to-btrix-graphite/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4 text-center">
            AI Agents (Add-ons)
          </h2>
          <p className="text-lg text-btrix-graphite mb-6 text-center max-w-2xl mx-auto">
            BTRIX Agents are specialized autonomous AI agents that work 24/7 inside your system, executing specific tasks with a defined scope.
          </p>

          {/* Rules Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-btrix-neon/20 to-btrix-accent/20 border-2 border-btrix-neon/50 rounded-xl p-6 mb-12"
          >
            <h3 className="text-xl font-display font-bold text-btrix-blue mb-4">
              Important Rules
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-btrix-graphite">
                  <span className="text-btrix-neon mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <h3 className="text-2xl font-display font-bold text-btrix-blue mb-6 text-center">
            Core AI Agents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-btrix-silver/20 hover:border-btrix-neon/50 p-6 group relative overflow-hidden"
              >
                {/* Robot Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div className="w-full h-full robot-silhouette" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{agent.emoji}</span>
                      <div>
                        <h3 className="text-xl font-display font-bold text-btrix-blue">
                          {agent.name}
                        </h3>
                        <p className="text-2xl font-bold text-btrix-neon">
                          €{agent.price.toLocaleString()}/month
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-btrix-blue mb-2">Functions</p>
                    <ul className="space-y-1">
                      {agent.functions.map((func, idx) => (
                        <li key={idx} className="text-sm text-btrix-graphite flex items-start gap-2">
                          <span className="text-btrix-neon mt-1">•</span>
                          <span>{func}</span>
                        </li>
                      ))}
                    </ul>
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
