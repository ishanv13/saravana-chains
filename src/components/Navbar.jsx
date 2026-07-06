import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Catalogue', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2] shadow-sm border-b border-[#E8DDD0]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
            <polygon
              points="16,2 30,26 2,26"
              stroke={scrolled ? '#C9A84C' : '#E8C96A'}
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div>
            <span
              className="font-heading font-semibold tracking-widest text-sm uppercase block transition-colors duration-500"
              style={{ color: scrolled ? '#1A1A1A' : '#ffffff' }}
            >
              Saravana Chains
            </span>
            <span
              className="font-body text-[10px] tracking-[0.3em] uppercase block transition-colors duration-500"
              style={{ color: '#C9A84C' }}
            >
              Pvt. Ltd
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#C9A84C]"
              style={{ color: scrolled ? '#1A1A1A' : 'rgba(255,255,255,0.9)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+919944442901"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 bg-[#C9A84C] text-white text-xs tracking-widest uppercase font-body font-medium hover:bg-[#9A7A2E] transition-colors duration-300"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? '#1A1A1A' : '#ffffff',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? '#1A1A1A' : '#ffffff',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? '#1A1A1A' : '#ffffff',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#FAF7F2] border-b border-[#E8DDD0]"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#1A1A1A] font-body text-sm tracking-widest uppercase hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/+919944442901"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-5 py-2.5 bg-[#C9A84C] text-white text-xs tracking-widest uppercase font-body font-medium"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
