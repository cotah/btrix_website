export const packs = {
  essential: {
    id: 'essential',
    name: 'BTRIX ESSENTIAL',
    setup: 1400,
    monthly: 300,
    description: 'Best for small businesses that need structured support, lead capture and basic automation.',
    bestFor: 'Small businesses that need structured support, lead capture and basic automation.',
    mainBenefit: '24/7 automated operations with minimum human effort.',
    idealFor: 'Local businesses, clinics, service providers.',
    color: 'green',
    image: '/images/robot-barber.png', // Barbershop image
  },
  pro: {
    id: 'pro',
    name: 'BTRIX PRO',
    setup: 2200,
    monthly: 550,
    description: 'Best for growing companies that need multichannel automation and intermediate AI intelligence.',
    bestFor: 'Growing companies that need multichannel automation and intermediate AI intelligence.',
    mainBenefit: 'Higher conversion, lower operational cost and data-driven decisions.',
    idealFor: 'E-commerce, real estate, structured service companies.',
    color: 'blue',
    recommended: true,
    image: '/images/robot-restaurant.png', // Restaurant image
  },
  custom: {
    id: 'custom',
    name: 'BTRIX CUSTOM / ENTERPRISE',
    setup: 3500,
    monthly: 900,
    description: 'Best for companies requiring advanced automation, multiple agents and deep integrations.',
    bestFor: 'Companies requiring advanced automation, multiple agents and deep integrations.',
    mainBenefit: 'True scalability with AI managing the operation end-to-end.',
    idealFor: 'Enterprises, franchises, complex digital operations.',
    color: 'purple',
    custom: true,
    image: '/images/robot-warehouse.png', // Warehouse image
  },
}

export const agents = [
  {
    id: 'sales',
    name: 'Sales Agent',
    emoji: '🤖',
    price: 200,
    functions: [
      'Qualifies leads',
      'Prioritizes opportunities',
      'Suggests follow-ups',
      'Manages pipelines',
    ],
    image: '/images/robot-office.jpg', // Office image
  },
  {
    id: 'marketing',
    name: 'Marketing Agent',
    emoji: '📈',
    price: 200,
    functions: [
      'Analyzes campaigns',
      'Improves copy',
      'Optimizes strategy',
      'Generates reports',
    ],
    image: '/images/robot-office.jpg',
  },
  {
    id: 'financial',
    name: 'Finance Agent',
    emoji: '💰',
    price: 180,
    functions: [
      'Tracks cash flow',
      'Creates alerts',
      'Identifies patterns',
      'Supports financial decisions',
    ],
    image: '/images/robot-office.jpg',
  },
  {
    id: 'inventory',
    name: 'Inventory Agent',
    emoji: '📦',
    price: 180,
    functions: [
      'Monitors stock levels',
      'Prevents shortages',
      'Synchronizes sales with inventory',
    ],
    image: '/images/robot-warehouse.jpg',
  },
  {
    id: 'social',
    name: 'Social Media Agent',
    emoji: '📱',
    price: 180,
    functions: [
      'Creates content ideas',
      'Manages calendars',
      'Analyzes engagement',
      'Improves performance',
    ],
    image: '/images/robot-restaurant.jpg',
  },
  {
    id: 'design',
    name: 'Design Agent (Image)',
    emoji: '🖼️',
    price: 180,
    functions: [
      'Creates static designs, banners and creatives',
      'Aligned with your brand',
      'A/B variations',
    ],
    image: '/images/robot-salon.jpg',
  },
  {
    id: 'video',
    name: 'Video Agent',
    emoji: '🎥',
    price: 250,
    functions: [
      'Produces short-form videos, ads, reels',
      'Avatars and simple animations',
    ],
    image: '/images/robot-salon.jpg',
  },
]

export const bundles = [
  {
    id: 'bundle-essential',
    name: 'Essential + Agents',
    pack: packs.essential,
    agents: [
      agents.find(a => a.id === 'sales')!,
      agents.find(a => a.id === 'social')!,
    ],
    monthlyPrice: 430,
    separatePrice: 680,
    savings: 250,
    benefit: 'Perfect for starting automation without increasing staff.',
    image: '/images/robot-barbershop.jpg',
  },
  {
    id: 'bundle-pro',
    name: 'Pro + Agents',
    pack: packs.pro,
    agents: [
      agents.find(a => a.id === 'sales')!,
      agents.find(a => a.id === 'marketing')!,
      agents.find(a => a.id === 'financial')!,
      agents.find(a => a.id === 'social')!,
    ],
    monthlyPrice: 790,
    separatePrice: 1310,
    savings: 520,
    benefit: 'Perfect for building a full AI-powered virtual team.',
    bestSeller: true,
    image: '/images/robot-restaurant.jpg',
  },
  {
    id: 'bundle-custom',
    name: 'Custom / Enterprise + Agents',
    pack: packs.custom,
    agents: [
      agents.find(a => a.id === 'sales')!,
      agents.find(a => a.id === 'marketing')!,
      agents.find(a => a.id === 'financial')!,
      agents.find(a => a.id === 'inventory')!,
      agents.find(a => a.id === 'design')!,
      agents.find(a => a.id === 'video')!,
    ],
    monthlyPrice: 1350,
    separatePrice: 1990,
    savings: 640,
    benefit: 'Perfect for near-autonomous operations.',
    image: '/images/robot-warehouse.jpg',
  },
]

export const testimonials = [
  {
    id: 1,
    text: 'We reduced response time by 70% and stopped losing leads on WhatsApp.',
    author: 'Technology Company',
  },
  {
    id: 2,
    text: 'The system became our "24/7 operator". Our team focuses on what matters.',
    author: 'SME Services Sector',
  },
  {
    id: 3,
    text: 'Centralized data and automated follow-up increased conversion.',
    author: 'E-commerce Company',
  },
]

export const steps = [
  {
    number: 1,
    title: 'Onboarding & System Configuration',
    description: 'We analyze your business, channels, workflows and goals. Then we design your AI operating system.',
  },
  {
    number: 2,
    title: 'Channel & Data Integration',
    description: 'WhatsApp, website, CRM, email, payments and internal systems connected into one intelligent flow.',
  },
  {
    number: 3,
    title: 'Automation & AI Activation',
    description: 'AI agents go live, handling support, lead qualification, data organization and operational tasks.',
  },
  {
    number: 4,
    title: 'Continuous Monitoring & Evolution',
    description: 'The system improves continuously with automated reports, insights and optimizations.',
  },
]

export const sectorUseCases = [
  {
    id: 'clinics',
    name: 'Clinics & Healthcare',
    icon: '🏥',
    useCases: [
      'Appointment automation',
      'Follow-ups and reminders',
      'Lead qualification',
      'Finance & billing alerts',
    ],
    image: '/images/robot-spa.jpg',
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Hospitality',
    icon: '🍽️',
    useCases: [
      'Reservation confirmations',
      'Order reminders',
      'Customer engagement automation',
      'Inventory optimization',
    ],
    image: '/images/robot-restaurant.jpg',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: '🏠',
    useCases: [
      'Lead qualification',
      'Follow-up automation',
      'Pipeline organization',
      'Content generation',
    ],
    image: '/images/robot-office.jpg',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: '🛒',
    useCases: [
      'Customer support automation',
      'Marketing optimization',
      'Inventory management',
      'Payment follow-ups',
    ],
    image: '/images/robot-store.jpg',
  },
  {
    id: 'services',
    name: 'Professional Services',
    icon: '💼',
    useCases: [
      'Scheduling',
      'Client communication',
      'Reporting',
      'Data centralization',
    ],
    image: '/images/robot-office.jpg',
  },
  {
    id: 'pets',
    name: 'Pet Shops & Pet Services',
    icon: '🐾',
    useCases: [
      'Appointment scheduling (grooming, vet, training)',
      'Reminder messages (vaccines, services, returns)',
      'Lead qualification for new clients',
      'Automated customer follow-ups and payments',
    ],
    image: '/images/robot-petshop.jpg',
  },
  {
    id: 'education',
    name: 'Schools & Educational Centers',
    icon: '🎓',
    useCases: [
      'Enrollment lead qualification',
      'Student and parent communication',
      'Scheduling and reminders',
      'Administrative and billing automation',
    ],
    image: '/images/robot-office.jpg',
  },
  {
    id: 'hostels',
    name: 'Hostels, Inns & Guesthouses',
    icon: '🏨',
    useCases: [
      'Booking confirmations',
      'Check-in and check-out reminders',
      'Guest communication automation',
      'Payment reminders and follow-ups',
    ],
    image: '/images/robot-restaurant.jpg',
  },
  {
    id: 'hotels',
    name: 'Hotels, Lodges & Small Resorts',
    icon: '🏡',
    useCases: [
      'Reservation management',
      'Guest experience automation',
      'Pre-arrival and post-stay communication',
      'Integrated billing and operational follow-ups',
    ],
    image: '/images/robot-restaurant.jpg',
  },
]

export const voiceAI = {
  name: 'BTRIX Voice AI',
  description: 'A human-sounding AI voice agent that makes and receives calls automatically.',
  features: [
    'Make automated calls',
    'Confirm appointments',
    'Perform follow-ups',
    'Qualify leads',
    'Send reminders',
    'Automated collections',
    'Natural human-like voice (powered by ElevenLabs)',
  ],
  setup: { min: 600, max: 1000 },
  monthly: { min: 100, max: 200 },
  note: 'Available only with an active BTRIX pack.',
  image: '/images/robot-office.jpg',
}
