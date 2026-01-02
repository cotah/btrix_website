import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BtrixChatbot from '@/components/BtrixChatbot'
import WhatsAppHandler from '@/components/WhatsAppHandler'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Business Automation Systems for Companies | BTRIX',
  description: 'BTRIX builds AI-powered operating systems for businesses. Automate leads, support, data and decisions with 24/7 intelligent automation.',
  keywords: 'AI business automation, AI operating systems, business automation with AI, AI agents for companies, enterprise automation, AI customer support',
  openGraph: {
    title: 'AI Business Automation Systems for Companies | BTRIX',
    description: 'BTRIX builds AI-powered operating systems for businesses. Automate leads, support, data and decisions with 24/7 intelligent automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BtrixChatbot />
        <WhatsAppHandler />
      </body>
    </html>
  )
}
