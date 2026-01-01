'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-btrix-blue/95 backdrop-blur-sm shadow-lg'
          : 'bg-btrix-blue'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold text-white hover:text-btrix-neon transition-colors"
            aria-label="BTRIX Home"
          >
            BTRIX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-btrix-silver hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <LanguageSelector />
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-btrix-neon text-btrix-blue px-6 py-2 rounded-lg font-semibold hover:bg-btrix-accent transition-colors"
            >
              Talk to BTRIX
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block text-btrix-silver hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSelector />
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block bg-btrix-neon text-btrix-blue px-6 py-2 rounded-lg font-semibold text-center mt-4"
            >
              Talk to BTRIX
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
