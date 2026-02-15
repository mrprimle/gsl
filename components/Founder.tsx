import Image from 'next/image'

const credentials = [
  {
    label: '20+ years',
    description: 'Global leadership experience',
  },
  {
    label: 'Hong Kong + London',
    description: 'International markets expertise',
  },
  {
    label: 'Stanford SCPM',
    description: 'Certified since 2006',
  },
  {
    label: 'PMO, ERP, AI',
    description: 'Governance specialist',
  },
]

export default function Founder() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            Led by a Stanford-Certified{' '}
            <span className="gradient-text-animated">
              Transformation Leader
            </span>
          </h2>
        </div>

        {/* Content — 2-column: left card (photo + info) | right team plate */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-8 items-stretch">
          {/* Left: Single card with photo + credentials */}
          <div className="card-neu">
            <div className="card-neu-inner !p-0 overflow-hidden">
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Photo — sticks to left edge */}
                <div className="shrink-0 w-full md:w-[440px] lg:w-[480px] overflow-hidden flex items-end">
                  <Image
                    src="/chalon-founder.png"
                    alt="Founder portrait"
                    width={600}
                    height={780}
                    className="w-full object-contain object-left-bottom"
                    style={{ marginLeft: '-36px', marginBottom: '-40px', marginRight: '-20px' }}
                    priority
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-1">
                    Chalon Bridges
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
                    Founder &amp; Principal Consultant
                  </p>

                  <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-5">
                    With over two decades of global project leadership across
                    Hong Kong and London, our founder brings Stanford-certified
                    governance frameworks and deep expertise in PMO, ERP, AI,
                    and operational transformation to every engagement.
                  </p>
                  <p className="text-[#4b5563] text-sm md:text-base leading-relaxed">
                    Every engagement is personally led — no delegation to
                    juniors, no learning on your budget. You get senior-level
                    orchestration combined with AI-native speed from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Expert team plate */}
          <div className="card-neu mx-auto lg:mx-0 self-stretch">
            <div className="card-neu-inner flex flex-col items-center justify-center text-center">
              {/* Team icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>

              <p className="text-2xl md:text-3xl font-bold text-dark mb-2">
                Plus 5+ Senior Specialists
              </p>
              <p className="text-primary font-semibold text-sm mb-4">
                Ex-Big 4 &amp; Enterprise Veterans
              </p>
              <p className="text-muted text-xs leading-relaxed">
                Governance architects, PMO leads, AI strategists &amp;
                transformation consultants — all hand-picked, all senior
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
