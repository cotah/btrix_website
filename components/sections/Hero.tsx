'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-btrix-blue via-btrix-graphite to-btrix-blue overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(31, 182, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Robot Image - Hero */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-btrix-blue to-transparent z-10" />
          <Image
            src="/images/robot-office.png"
            alt="BTRIX AI Robot in Office"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            AI-Powered Automation Systems for Companies Ready to Scale
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-btrix-silver mb-10 max-w-3xl leading-relaxed">
            BTRIX builds AI business operating systems that integrate channels, data, automation and specialized AI agents into one intelligent ecosystem.
            <br />
            <span className="text-btrix-neon font-semibold">Your business running 24/7, without losing leads and without increasing headcount.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button
              className="w-full sm:w-auto bg-btrix-neon text-btrix-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-btrix-accent transition-all transform hover:scale-105 shadow-lg hover:shadow-xl wa-btn"
              data-wa-msg="Oi! Vim pelo site da BTRIX e quero entender como funciona. Gostaria de solicitar um diagnóstico."
              aria-label="Request a Diagnosis"
            >
              Request a Diagnosis
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="w-full sm:w-auto bg-transparent border-2 border-btrix-neon text-btrix-neon px-8 py-4 rounded-lg font-semibold text-lg hover:bg-btrix-neon hover:text-btrix-blue transition-all"
              aria-label="View Packs and Bundles"
            >
              View Packs & Bundles
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-btrix-neon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
