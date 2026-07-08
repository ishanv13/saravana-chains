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
          ? 'glass-panel border-b border-[rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-6.52.43-PM-300x300.jpeg"
            alt="Saravana Chains Logo"
            style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <span
              className="font-heading font-semibold tracking-widest text-sm uppercase block transition-colors duration-500"
              style={{ color: '#ffffff' }}
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
              className="font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#CA8A04]"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+919944442901"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 16,
              padding: '10px 24px',
              background: '#A16207',
              color: '#ffffff',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: 32,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#CA8A04'; e.currentTarget.style.transform = 'scale(1.05)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#A16207'; e.currentTarget.style.transform = 'scale(1)' }}
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
              backgroundColor: '#ffffff',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
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
            className="md:hidden overflow-hidden glass-panel border-t border-[rgba(255,255,255,0.05)]"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-body text-sm tracking-widest uppercase hover:text-[#CA8A04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/+919944442901"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  background: '#A16207',
                  color: '#ffffff',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: 32,
                  alignSelf: 'flex-start',
                }}
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
