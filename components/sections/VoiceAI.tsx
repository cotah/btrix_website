'use client'

import { motion } from 'framer-motion'
import { voiceAI } from '@/lib/data'
import Image from 'next/image'

export default function VoiceAI() {
  return (
    <section className="py-20 bg-gradient-to-br from-btrix-blue via-btrix-graphite to-btrix-blue text-white relative overflow-hidden">
      {/* Background Robot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-10">
        <Image
          src="/images/robot-sushi.png"
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
          <div className="bg-white/10 backdrop-blur-sm border-2 border-btrix-neon/30 rounded-xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🎙️</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
                Exclusive Add-on — Voice AI
              </h2>
            </div>

            <p className="text-xl text-btrix-silver mb-8 leading-relaxed">
              {voiceAI.description}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-4">What Voice AI Can Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {voiceAI.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                    <span className="text-2xl">{feature.match(/^[^\s]+/)?.[0] || '•'}</span>
                    <span className="text-btrix-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-btrix-neon/20 border border-btrix-neon/50 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-display font-bold mb-4">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-btrix-silver/80 mb-1">Setup</p>
                  <p className="text-2xl font-bold">
                    €{voiceAI.setup.min.toLocaleString()} – €{voiceAI.setup.max.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-btrix-silver/80 mb-1">Monthly</p>
                  <p className="text-2xl font-bold">
                    €{voiceAI.monthly.min.toLocaleString()} – €{voiceAI.monthly.max.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-yellow-200">
                ⚠️ {voiceAI.note}
              </p>
            </div>
            
            <button
              className="w-full bg-btrix-neon text-btrix-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-btrix-accent transition-all transform hover:scale-105 shadow-lg hover:shadow-xl wa-btn"
              data-wa-msg="Oi! Quero adicionar o Voice AI ao meu pacote BTRIX. Pode me explicar como funciona e os valores?"
            >
              Quero o Voice AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

