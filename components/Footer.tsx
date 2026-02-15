'use client'

const footerLinks = {
  services: [
    { label: 'Investor-Readiness Audit', href: '#services' },
    { label: 'Governance & PMO Setup', href: '#services' },
    { label: 'Systems Architecture', href: '#services' },
    { label: 'Automation & AI', href: '#services' },
    { label: 'Data Room Setup', href: '#services' },
  ],
  company: [
    { label: 'Process', href: '#process' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const anchor = href.replace('#', '')
    if (anchor) {
      e.preventDefault()
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#0a0a0f] px-6 md:px-8 pt-6 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-2.5"
            >
              <img
                src="/logo.svg"
                alt="Giorgio Studios"
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="text-lg font-bold tracking-tight text-white uppercase">
                Giorgio Studios
              </span>
            </a>
            <p className="text-sm text-white/40 max-w-[280px] text-center md:text-left">
              Investor-grade operational transformation for growth-stage tech
              companies.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-normal text-white mb-4">
              Services
            </h4>
            {footerLinks.services.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors mb-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-normal text-white mb-4">
              Company
            </h4>
            {footerLinks.company.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors mb-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-normal text-white mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:info@giorgiostudios.com"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors mb-2"
            >
              info@giorgiostudios.com
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              Book a call
              <svg
                className="w-3.5 h-3.5"
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

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Giorgio Studios. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
