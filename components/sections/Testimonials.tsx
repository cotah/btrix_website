'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-12 text-center">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-btrix-blue/5 to-btrix-neon/5 rounded-xl p-8 border border-btrix-silver/20 hover:border-btrix-neon/50 transition-all hover:shadow-lg relative overflow-hidden group"
              >
                {/* Robot Silhouette Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div className="w-full h-full robot-silhouette" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-btrix-neon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-btrix-graphite mb-6 leading-relaxed text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="text-sm text-btrix-blue font-semibold">
                    — {testimonial.author}
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
