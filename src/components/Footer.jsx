const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Catalogue', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D0A05', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="section-container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img
                src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-6.52.43-PM-300x300.jpeg"
                alt="Saravana Chains Logo"
                style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <span className="font-heading" style={{ fontWeight: 600, letterSpacing: '0.15em', fontSize: 13, textTransform: 'uppercase', color: '#ffffff', display: 'block' }}>
                  Saravana Chains
                </span>
                <span className="font-body" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', display: 'block' }}>
                  Pvt. Ltd
                </span>
              </div>
            </div>
            <p className="font-body" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, lineHeight: 1.7, maxWidth: 220 }}>
              Manufacturer &amp; Wholesaler of premium gold chains and bracelets since 2019.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body" style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body"
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body" style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+919944442901" className="font-body" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                +91 99444 42901
              </a>
              <a href="mailto:saravanachains19@gmail.com" className="font-body" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                saravanachains19@gmail.com
              </a>
              <p className="font-body" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, lineHeight: 1.7 }}>
                42L, CVR Complex, South Avani Moola Street,<br />Madurai - 625001
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p className="font-body" style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11 }}>
            © {new Date().getFullYear()} Saravana Chains Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-body" style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11 }}>
            Madurai, Tamil Nadu · Est. 2019
          </p>
        </div>
      </div>
    </footer>
  )
}
