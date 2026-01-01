# BTRIX - Institutional Website

Complete institutional website for BTRIX company, built with Next.js 14 (App Router), TypeScript and TailwindCSS.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- **Google Fonts** (Inter + Space Grotesk)

## 📋 Features

- ✅ One-page site with anchor navigation
- ✅ Futuristic corporate design (smart cities)
- ✅ Fully responsive (mobile-first)
- ✅ Multilingual structure (PT, EN, ES, IT, AR) - ready
- ✅ SEO optimized (English content)
- ✅ Accessibility (ARIA labels, contrast, visible focus)
- ✅ Smooth microinteractions
- ✅ Performance optimized
- ✅ Robot images integration ready

## 🎨 Sections

1. **Hero** - Main presentation with CTAs
2. **About BTRIX** - Company positioning
3. **Value Proposition** - Main benefits
4. **How It Works** - 4-step process
5. **Service Packs** - 3 plans (Essential, Pro, Custom/Enterprise)
6. **Bundles** - Pack + AI Agents combinations
7. **AI Agents (Add-ons)** - Specialized AI agents
8. **Sector-Specific Use Cases** - Industry-specific applications
9. **Voice AI** - Exclusive voice AI add-on
10. **Testimonials** - Client testimonials
11. **Future 360°** - Roadmap and vision
12. **Contact** - Contact form

## 🛠️ Installation

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run in development
npm run dev

# Build for production
npm run build

# Run production
npm start
```

## 📁 Structure

```
├── app/
│   ├── layout.tsx       # Main layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Header with navigation
│   ├── Footer.tsx       # Footer
│   ├── LanguageSelector.tsx
│   └── sections/        # Site sections
├── lib/
│   ├── data.ts          # Structured data (packs, bundles, agents, sectors)
│   └── i18n.ts          # Multilingual translations
└── public/
    └── images/          # Robot images (see IMAGES_GUIDE.md)
```

## 🎨 Color Palette

- **Deep Blue**: `#0A1F44` (btrix-blue)
- **Tech Silver**: `#C9CED6` (btrix-silver)
- **Neon Blue**: `#1FB6FF` (btrix-neon)
- **Graphite**: `#1A1A1A` (btrix-graphite)
- **Accent**: `#00FFD1` (btrix-accent)

## 🤖 Robot Images

The site is designed to showcase BTRIX robots in different business contexts. See `IMAGES_GUIDE.md` for instructions on adding robot images.

Currently using CSS-based robot silhouettes as placeholders. When you add the actual images to `public/images/`, they will automatically appear.

## 📝 Content

- All content is in English (SEO optimized)
- Prices and data are in `lib/data.ts` for easy editing
- Multilingual system structured in `lib/i18n.ts` (language switching implementation pending)
- Contact form needs backend for real submission
- Contact placeholders: contato@btrix.ai and +353 XX XXX XXXX

## 🆕 New Sections

### Sector-Specific Use Cases
Shows how BTRIX AI agents work in different industries:
- Clinics & Healthcare
- Restaurants & Hospitality
- Real Estate
- E-commerce
- Professional Services
- Pet Shops & Pet Services
- Schools & Educational Centers
- Hostels, Inns & Guesthouses
- Hotels, Lodges & Small Resorts

### Voice AI
Exclusive add-on featuring:
- Human-sounding AI voice agent
- Automated calls and confirmations
- Lead qualification
- Reminders and collections
- Powered by ElevenLabs

## 🔧 Next Steps

1. Add robot images to `public/images/` (see `IMAGES_GUIDE.md`)
2. Implement functional language switching
3. Connect contact form to backend/API
4. Add analytics
5. Optimize images when real assets are available
6. Add tests

## 📄 License

MIT
