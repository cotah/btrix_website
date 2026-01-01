import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ValueProposition from '@/components/sections/ValueProposition'
import HowItWorks from '@/components/sections/HowItWorks'
import Packs from '@/components/sections/Packs'
import Bundles from '@/components/sections/Bundles'
import Agents from '@/components/sections/Agents'
import SectorUseCases from '@/components/sections/SectorUseCases'
import VoiceAI from '@/components/sections/VoiceAI'
import Testimonials from '@/components/sections/Testimonials'
import Future from '@/components/sections/Future'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ValueProposition />
      <HowItWorks />
      <Packs />
      <Bundles />
      <Agents />
      <SectorUseCases />
      <VoiceAI />
      <Testimonials />
      <Future />
      <Contact />
    </>
  )
}
