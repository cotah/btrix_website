'use client'

import { useEffect } from 'react'

export default function WhatsAppHandler() {
  useEffect(() => {
    const phone = "353899400960" // WhatsApp BTRIX (sem +)

    function waUrl(message: string) {
      const fallback = "Oi! Vim pelo site da BTRIX e quero falar com vocês."
      const text = encodeURIComponent(message || fallback)
      return `https://wa.me/${phone}?text=${text}`
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const el = target.closest(".wa-btn")
      if (!el) return

      e.preventDefault()

      const msg = el.getAttribute("data-wa-msg") || "Oi! Vim pelo site da BTRIX e quero falar com vocês."
      window.open(waUrl(msg), "_blank", "noopener")
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
