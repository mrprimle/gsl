const benefits = [
  {
    number: '01',
    title: 'Elite Governance',
    description:
      'We don\'t just "manage projects" — we build Stanford-level decision-making frameworks that satisfy the most rigorous auditors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="uvp-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path stroke="url(#uvp-grad-1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Integrated Architecture',
    description:
      'We connect the "Hi-Tech" (ERP/CRM/AI) with the "Hi-Touch" (Leadership/People), ensuring your tech stack serves your strategy.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="uvp-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path stroke="url(#uvp-grad-2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'The "Senior-Only" Edge',
    description:
      'You deal directly with a lead architect who has saved firms £40k+ in single rollouts. No juniors, no learning on your dime.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="uvp-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path stroke="url(#uvp-grad-3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
]

export default function UVP() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            Why Giorgio Studios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Why Choose a{' '}
            <span className="gradient-text-animated">Senior Lead</span> over a
            Big-4 Team?
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="card-neu">
              <div className="card-neu-inner flex flex-col min-h-[320px] md:min-h-[380px]">
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted tracking-wider">
                    {benefit.number}
                  </span>
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
