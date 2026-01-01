'use client'

import { useState } from 'react'
import { languages, type Language } from '@/lib/i18n'

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>('pt')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-btrix-silver hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{languages.find(l => l.code === currentLang)?.nativeName || 'PT'}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full right-0 mt-2 bg-btrix-blue border border-btrix-silver/20 rounded-lg shadow-xl z-20 min-w-[150px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                  // TODO: Implement language switching
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-btrix-neon/20 transition-colors ${
                  currentLang === lang.code ? 'text-btrix-neon' : 'text-btrix-silver'
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

