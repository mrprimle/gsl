'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Will this slow down our devs?',
    answer:
      'No. We work alongside your team to remove administrative friction so they can code. Our process is designed to reduce overhead, not add it.',
  },
  {
    question: 'Is AI a gimmick here?',
    answer:
      'No. We use AI to automate your governance documentation and KPI reporting, saving you 60% in manual labor costs. It\'s practical AI applied to real operational problems.',
  },
  {
    question: 'We have 45 days, not 90. Can you help?',
    answer:
      'We can accelerate the Investor-Ready Data Room phase specifically to meet immediate deal deadlines. We\'ve done compressed timelines before and know how to prioritize.',
  },
  {
    question: 'What size companies do you work with?',
    answer:
      'We work with growth-stage tech companies — typically Series A through pre-IPO — that have outgrown their early-stage systems but haven\'t yet built investor-grade operations.',
  },
  {
    question: 'Do you replace our existing tools?',
    answer:
      'No. We work with your existing tech stack and optimize it. If replacements are needed, we provide selection criteria and migration plans, but only if it\'s genuinely required.',
  },
  {
    question: 'What happens after the engagement ends?',
    answer:
      'You keep everything — all documentation, frameworks, templates, and systems. We also provide a handover package and optional retainer support to ensure continuity.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Common{' '}
              <span className="gradient-text-animated">questions</span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Removing friction so you can decide with confidence.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white border-primary/20 shadow-lg shadow-primary/5'
                      : 'bg-white/60 border-[#F4F5F6] hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  >
                    <span
                      className={`text-base md:text-lg font-semibold pr-4 transition-colors ${
                        openIndex === index ? 'text-dark' : 'text-dark/80'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-primary text-white rotate-45'
                          : 'bg-[#f5f5f7] text-muted'
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-[#4b5563] text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
