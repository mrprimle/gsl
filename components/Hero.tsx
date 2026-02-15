'use client'

import { useEffect, useState } from 'react'

const trustItems = [
  '25+ years global leadership (Hong Kong & London)',
  'Stanford-certified governance frameworks',
  'Senior orchestration, AI-Native speed',
  'Built for investor scrutiny',
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 hero-texture opacity-40" />

      {/* Subtle diagonal light streak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 30%, rgba(59, 94, 255, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(59, 94, 255, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-28 pb-16">
          <div className="max-w-4xl">
            {/* Tag line */}
            <div
              className={`inline-flex mb-6 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transition:
                  'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: mounted ? '50ms' : '0ms',
              }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                Operational Transformation for Growth-Stage Tech
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition:
                  'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: mounted ? '150ms' : '0ms',
              }}
            >
              From Messy Systems to{' '}
              <span className="gradient-text-animated">
                Investor-Grade Operations
              </span>{' '}
              in 60–90 Days
            </h1>

            {/* Subheadline */}
            <p
              className={`text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-4 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition:
                  'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: mounted ? '300ms' : '0ms',
              }}
            >
              Governance, architecture, and delivery control led by a{' '}
              <span className="text-white font-bold">Stanford-certified transformation leader</span> with 20+ years of
              global project expertise.
            </p>

            {/* Outcome line */}
            <p
              className={`text-white/80 text-sm md:text-base font-medium mb-10 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition:
                  'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: mounted ? '400ms' : '0ms',
              }}
            >
              Bulletproof your due diligence for Series A–C, M&A, or IPO.
            </p>

            {/* CTA */}
            <div
              className={`${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transition:
                  'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: mounted ? '500ms' : '0ms',
              }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 bg-primary text-white font-mono text-xs md:text-sm uppercase tracking-wider px-6 md:px-8 py-3.5 md:py-4 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Book Your 30-Minute Investor-Readiness Audit
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 pb-12 md:pb-16">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div
            className={`${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transition:
                'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: mounted ? '700ms' : '0ms',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-4 px-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/60 text-xs md:text-sm leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
