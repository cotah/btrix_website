'use client'

import Link from 'next/link'

export default function Footer() {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#future', label: 'Future 360°' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-btrix-graphite text-btrix-silver py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">BTRIX</h3>
            <p className="text-sm text-btrix-silver/80">
              AI-powered operating systems for businesses. Automate leads, support, data and decisions with 24/7 intelligent automation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-sm text-btrix-silver/80 hover:text-btrix-neon transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contato@btrix.ai"
                  className="text-btrix-silver/80 hover:text-btrix-neon transition-colors"
                >
                  contato@btrix.ai
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/353XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-btrix-silver/80 hover:text-btrix-neon transition-colors"
                >
                  +353 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-btrix-silver/20 pt-8">
          <p className="text-sm text-btrix-silver/60 text-center mb-2">
            © 2025 BTRIX. All rights reserved.
          </p>
          <p className="text-xs text-btrix-silver/50 text-center">
            Prices may vary according to complexity and integrations.
          </p>
        </div>
      </div>
    </footer>
  )
}
