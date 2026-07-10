import { useState, useEffect } from 'react'

const LOGO = 'https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-6.52.43-PM-300x300.jpeg'
const WA = 'https://wa.me/+919944442901'
const links = [
  { label: 'Story', href: '#story' },
  { label: 'Range', href: '#index' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
        transition: 'background .5s, border-color .5s',
        background: scrolled ? 'rgba(9,6,4,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <nav
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72, padding: '0 var(--edge)', maxWidth: 1600, margin: '0 auto',
        }}
      >
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src={LOGO} alt="Saravana Chains" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line-strong)' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span className="f-display" style={{ fontSize: 17, letterSpacing: '0.02em', color: 'var(--ivory)' }}>Saravana Chains</span>
            <span className="f-mono" style={{ fontSize: 10.5, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)' }}>Est. 2019 · Madurai</span>
          </span>
        </a>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="f-mono"
              style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--taupe)', textDecoration: 'none', transition: 'color .3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-hi)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--taupe)')}
            >{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ padding: '11px 20px' }}>Enquire</a>
        </div>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 0, cursor: 'pointer', padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: 'var(--ivory)', transition: 'transform .3s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
          <span style={{ width: 24, height: 1.5, background: 'var(--ivory)', transition: 'opacity .3s', opacity: open ? 0 : 1 }} />
          <span style={{ width: 24, height: 1.5, background: 'var(--ivory)', transition: 'transform .3s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
        </button>
      </nav>

      {open && (
        <div style={{ padding: '8px var(--edge) 28px', display: 'flex', flexDirection: 'column', gap: 20, background: 'rgba(9,6,4,0.97)', borderTop: '1px solid var(--line)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="f-mono"
              style={{ fontSize: 14.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory)', textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ alignSelf: 'flex-start' }}>Enquire on WhatsApp</a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
