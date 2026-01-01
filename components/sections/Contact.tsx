'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Message sent! We will respond within 24h.')
    setFormData({ name: '', company: '', email: '', whatsapp: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Robot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-5">
        <Image
          src="/images/robot-retail.png"
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
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-btrix-blue mb-4 text-center">
            Ready to automate your business with real AI?
          </h2>
          <p className="text-lg text-btrix-graphite mb-8 text-center">
            Request a diagnosis and discover which BTRIX pack or bundle fits your company best.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-btrix-blue/5 to-btrix-neon/5 p-8 rounded-xl border border-btrix-silver/20">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-btrix-blue mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-btrix-silver/20 focus:border-btrix-neon focus:outline-none focus:ring-2 focus:ring-btrix-neon/20 transition-all bg-white"
                aria-label="Name"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-btrix-blue mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-btrix-silver/20 focus:border-btrix-neon focus:outline-none focus:ring-2 focus:ring-btrix-neon/20 transition-all bg-white"
                aria-label="Company"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-btrix-blue mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-btrix-silver/20 focus:border-btrix-neon focus:outline-none focus:ring-2 focus:ring-btrix-neon/20 transition-all bg-white"
                aria-label="Email"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-btrix-blue mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-btrix-silver/20 focus:border-btrix-neon focus:outline-none focus:ring-2 focus:ring-btrix-neon/20 transition-all bg-white"
                aria-label="WhatsApp"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-btrix-blue mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-btrix-silver/20 focus:border-btrix-neon focus:outline-none focus:ring-2 focus:ring-btrix-neon/20 transition-all resize-none bg-white"
                aria-label="Message"
              />
            </div>

            <p className="text-sm text-btrix-graphite text-center">
              We respond within 24h. If you prefer, request a simulation of the ideal bundle.
            </p>

            <button
              type="submit"
              className="w-full bg-btrix-neon text-btrix-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-btrix-accent transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              👉 Talk to BTRIX
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
