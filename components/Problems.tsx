'use client'

import { useState } from 'react'

const problems = [
  {
    id: 1,
    title: 'Regulatory Shock',
    subtitle: 'The Audit You Didn\'t See Coming',
    scenario:
      'A regulator, partner, or enterprise client asks for your data flows, access logs, and governance documentation. You can\'t produce it.',
    consequences: [
      'Non-compliance fines',
      'Contract termination',
      'Forced system shutdowns',
      'Legal exposure for leadership',
      'Personal liability in extreme cases',
    ],
    painLine:
      'You thought you had a "tech problem." But now it\'s a legal and financial survival problem.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Due Diligence Deal Killer',
    subtitle: 'Investors open your data room and find chaos',
    scenario:
      'You enter Series B, M&A, or IPO preparation. Investors start asking: Where is your source of truth? How are decisions documented? Who owns critical systems?',
    consequences: [
      'Endless investor follow-up questions',
      'Deal fatigue',
      'Reduced valuation',
      'Or the deal quietly dies',
    ],
    painLine:
      'You didn\'t lose because of product or revenue. You lost because your internal operations looked like a liability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Silent Valuation Discount',
    subtitle: 'Investors don\'t say "no" — they adjust the price',
    scenario:
      'Everything "works," but your operations are messy: no unified architecture, no cost control dashboards, no delivery metrics, no governance structure.',
    consequences: [
      '10–30% valuation haircut',
      'Worse deal terms',
      'More dilution',
      'More control handed to investors',
    ],
    painLine:
      'You leave millions on the table because your operations don\'t look investor-grade.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Endless Firefighting Culture',
    subtitle: 'No one trusts the numbers. No one sees the full picture.',
    scenario:
      'Your leadership team spends every week fixing missed deadlines, explaining budget overruns, chasing updates from different tools, solving the same problems again and again.',
    consequences: [
      'Burnt-out leadership',
      'Slower releases',
      'Internal blame cycles',
      'Strategic decisions based on guesswork',
    ],
    painLine:
      'You\'re running a high-growth company with no operational control tower.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'AI Opportunity You Can\'t Use',
    subtitle: 'AI isn\'t blocked by technology — it\'s blocked by chaos',
    scenario:
      'Everyone talks about AI-driven operations, but your data is scattered across tools, inconsistent, poorly governed, and manually stitched together.',
    consequences: [
      'Automation projects stall',
      'AI pilots fail',
      'Competitors move faster',
      'Your cost base stays high',
    ],
    painLine:
      'AI isn\'t blocked by technology. It\'s blocked by your operational chaos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

export default function Problems() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="problems" className="py-20 md:py-28 lg:py-36 bg-[#fafafa]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-red-500 mb-4 block">
            The Hidden Risks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Is your company exposed to any of{' '}
            <span className="gradient-text-animated-red">these risks?</span>
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Growth-stage companies face operational blind spots that cost
            millions in lost deals, fines, and valuation discounts.
          </p>
        </div>

        {/* Desktop: accordion on left, detail on right */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Left — accordion tabs */}
          <div className="col-span-2 flex flex-col gap-3">
            {problems.map((problem, index) => (
              <button
                key={problem.id}
                onClick={() => setActiveIndex(index)}
                className={`group text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'bg-white border-red-500/20 shadow-lg shadow-red-500/5'
                    : 'bg-white/60 border-[#F4F5F6] hover:bg-white hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`transition-colors ${
                      activeIndex === index ? 'text-red-500' : 'text-muted'
                    }`}
                  >
                    {problem.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold transition-colors ${
                        activeIndex === index ? 'text-dark' : 'text-dark/70'
                      }`}
                    >
                      {problem.title}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 transition-colors ${
                        activeIndex === index ? 'text-muted' : 'text-muted/60'
                      }`}
                    >
                      {problem.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="col-span-3">
            <div className="card-neu h-full">
              <div className="card-neu-inner flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-red-500">
                    {problems[activeIndex].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">
                      {problems[activeIndex].title}
                    </h3>
                    <p className="text-sm text-muted">
                      {problems[activeIndex].subtitle}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-mono uppercase tracking-wider text-red-500 mb-2">
                    The Scenario
                  </p>
                  <p className="text-[#4b5563] text-[15px] leading-relaxed">
                    {problems[activeIndex].scenario}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-mono uppercase tracking-wider text-red-500 mb-3">
                    What Happens Next
                  </p>
                  <ul className="space-y-2">
                    {problems[activeIndex].consequences.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-[#4b5563] text-[15px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-[#F4F5F6]">
                  <p className="text-sm font-mono uppercase tracking-wider text-muted mb-2">
                    The Real Pain
                  </p>
                  <p className="text-dark font-semibold text-base leading-relaxed">
                    {problems[activeIndex].painLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4">
          {problems.map((problem) => (
            <div key={problem.id} className="card-neu">
              <div className="card-neu-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-red-500">{problem.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">
                      {problem.title}
                    </h3>
                    <p className="text-xs text-muted">{problem.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#4b5563] text-sm leading-relaxed mb-4">
                  {problem.scenario}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {problem.consequences.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[#4b5563] text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#F4F5F6]">
                  <p className="text-dark font-semibold text-sm leading-relaxed">
                    {problem.painLine}
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
