'use client'

import { useState, useEffect, useCallback } from 'react'

const navLinks = [
  { href: '#problems', label: 'Problems' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#deliverables', label: 'Deliverables' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const anchor = href.replace('#', '')
      if (anchor) {
        e.preventDefault()
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        closeMenu()
      }
    },
    [closeMenu]
  )

  const textColor = !isScrolled && !isMenuOpen ? 'text-white' : 'text-dark'
  const logoColor = !isScrolled && !isMenuOpen ? 'text-white' : 'text-dark'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-sm border-b border-gray-200/50'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                closeMenu()
              }}
              className={`flex items-center gap-2.5 z-50 transition-colors ${logoColor}`}
            >
              <img
                src="/logo.svg"
                alt="Giorgio Studios"
                className={`h-8 w-8 transition-all ${!isScrolled && !isMenuOpen ? 'brightness-0 invert' : 'brightness-0'}`}
              />
              <span className="text-lg font-bold tracking-tight uppercase">
                Giorgio Studios
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-sm font-medium transition-colors hover:opacity-70 cursor-pointer ${textColor}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-500 ${
                  isScrolled
                    ? 'opacity-100 translate-y-0 bg-dark text-white hover:bg-dark/90'
                    : 'opacity-0 -translate-y-2 pointer-events-none bg-dark text-white'
                }`}
              >
                Book Audit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-45 translate-y-[3px] bg-dark'
                    : !isScrolled
                    ? 'bg-white'
                    : 'bg-dark'
                }`}
              />
              <span
                className={`block w-6 h-0.5 rounded mt-1.5 transition-all duration-300 ${
                  isMenuOpen
                    ? '-rotate-45 -translate-y-[5px] bg-dark'
                    : !isScrolled
                    ? 'bg-white'
                    : 'bg-dark'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 ${
          isMenuOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-white/90 backdrop-blur-3xl transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          className={`relative h-full flex flex-col items-center justify-center transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 80 + 100}ms`
                    : '0ms',
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-semibold text-dark transition-colors hover:text-primary cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className={`transition-all duration-500 ${
                isMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${navLinks.length * 80 + 100}ms`
                  : '0ms',
              }}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-full bg-dark text-white transition-all hover:bg-dark/90 cursor-pointer"
              >
                Book Audit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
