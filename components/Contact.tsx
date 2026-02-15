export default function Contact() {
  return (
    <section id="contact" className="section-dark-top py-20 md:py-28 lg:py-36 -mt-10 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-6 block">
            Take The First Step
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            If investors look under the hood today,{' '}
            <span className="gradient-text-animated">
              will they like what they see?
            </span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Don&apos;t let operational chaos kill your deal. You will leave with
            a clear gap analysis and a roadmap for your first 30 days.
          </p>

          {/* CTA Button */}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-primary text-white font-mono text-xs md:text-sm uppercase tracking-wider px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all"
          >
            Book a 30-Minute Investor-Readiness Audit
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

          {/* Sub-CTA line */}
          <p className="text-white/30 text-sm mt-6">
            Free, no-obligation conversation. 30 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
