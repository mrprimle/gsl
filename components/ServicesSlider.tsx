'use client'

import { useRef, useState, useEffect } from 'react'

const services = [
  {
    id: 1,
    title: 'Investor-Readiness Audit',
    subtitle: 'Quick operational deep-dive before funding, M&A, or regulatory review.',
    items: [
      'Full systems and governance audit',
      'Due diligence risk assessment',
      'Gap analysis across tech, finance, and delivery',
      '30–90 day transformation roadmap',
    ],
    outcome: 'Clarity on what will break under investor or regulatory scrutiny.',
  },
  {
    id: 2,
    title: 'Governance & PMO Setup',
    subtitle: 'Audit-ready decision frameworks and delivery control.',
    items: [
      'Organization-wide RACI model',
      'PMO operating structure',
      'Risk & issue (RAID) logs',
      'Executive reporting cadence',
    ],
    outcome: 'Clear ownership, predictable delivery, and investor-grade governance.',
  },
  {
    id: 3,
    title: 'Systems & Data Architecture',
    subtitle: 'Unified architecture for ERP, CRM, and operational data.',
    items: [
      'Current-state system map',
      'Target architecture blueprint',
      'ERP/CRM selection and integration plan',
      'Data governance and access control',
    ],
    outcome: 'One coherent system instead of a fragmented SaaS stack.',
  },
  {
    id: 4,
    title: 'Automation & AI Enablement',
    subtitle: 'Reduce manual work and build real-time operational insight.',
    items: [
      'Process automation map',
      'AI-assisted reporting setup',
      'KPI dashboards',
      'Data pipeline design',
    ],
    outcome: '20–40% reduction in operational waste and faster decisions.',
  },
  {
    id: 5,
    title: 'Investor Data Room Setup',
    subtitle: 'Technical and operational documentation built for due diligence.',
    items: [
      'Governance documentation pack',
      'KPI and reporting models',
      'Technical architecture summary',
      'Structured investor data room',
    ],
    outcome: 'Confidence during fundraising, M&A, or regulatory review.',
  },
]

export default function ServicesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.75
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="services" className="section-dark-top py-20 md:py-28 lg:py-36 -mt-10 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Investor-Ready Transformation{' '}
              <span className="gradient-text-animated">Services</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg">
              Focused interventions that turn operational chaos into
              audit-ready, investor-grade systems.
            </p>
          </div>

          {/* Scroll controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-white/10 text-white/20 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-[85vw] md:w-[420px] lg:w-[400px] snap-start"
            >
              <div className="card-glass h-full flex flex-col min-h-[420px]">
                {/* Number badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Items */}
                <ul className="space-y-2.5 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white/70 text-sm">
                      <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Outcome */}
                <div className="mt-auto pt-5 border-t border-white/[0.08]">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1.5">
                    Outcome
                  </p>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    {service.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
