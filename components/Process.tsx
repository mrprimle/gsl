const steps = [
  {
    phase: '01',
    title: 'Discovery & Audit',
    timeline: 'Weeks 1–3',
    description: 'Deep-dive systems audit and gap analysis.',
    output: 'The Transformation Roadmap',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    phase: '02',
    title: 'Architecture & Governance',
    timeline: 'Weeks 4–7',
    description: 'Target state blueprinting.',
    output: 'Your custom PMO and ERP/CRM model',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    phase: '03',
    title: 'Implementation Sprint',
    timeline: 'Weeks 8–14',
    description: 'The heavy lifting — system setup, automation rollout, and process launch.',
    output: 'Live operational systems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    phase: '04',
    title: 'Investor Readiness',
    timeline: 'Weeks 15–17',
    description: 'Final audit and documentation.',
    output: 'Your Investor-Ready Data Room Pack',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="section-light-top py-20 md:py-28 lg:py-36 -mt-10 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            The 4-Step{' '}
            <span className="gradient-text-animated">&ldquo;Audit-to-Asset&rdquo;</span>{' '}
            Process
          </h2>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.phase} className="relative">
                {/* Step number circle */}
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="relative">
                    <div className="w-[72px] h-[72px] rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center text-primary shadow-sm">
                        {step.icon}
                      </div>
                    </div>
                    {/* Phase number */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="font-mono text-xs text-primary tracking-wider uppercase block mb-2">
                    {step.timeline}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-primary">
                      {step.output}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
