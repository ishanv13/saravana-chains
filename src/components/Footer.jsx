const LOGO = 'https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-6.52.43-PM-300x300.jpeg'
const nav = [
  { label: 'Story', href: '#story' },
  { label: 'Range', href: '#index' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 10, borderTop: '1px solid var(--line)', background: 'rgba(10,7,5,0.72)', backdropFilter: 'blur(10px)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '56px var(--edge) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 44 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={LOGO} alt="Saravana Chains" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line-strong)' }} />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span className="f-display" style={{ fontSize: 16, color: 'var(--ivory)' }}>Saravana Chains</span>
                <span className="f-mono" style={{ fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>Pvt. Ltd</span>
              </span>
            </div>
            <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 12.5, lineHeight: 1.7, maxWidth: 240 }}>
              Manufacturer &amp; wholesaler of premium gold chains and bracelets since 2019.
            </p>
          </div>

          <div>
            <p className="f-mono" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>Navigate</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="f-body" style={{ color: 'var(--taupe)', fontSize: 13, textDecoration: 'none', transition: 'color .25s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-hi)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--taupe)')}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="f-mono" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+919944442901" className="f-body" style={{ color: 'var(--taupe)', fontSize: 13, textDecoration: 'none' }}>+91 99444 42901</a>
              <a href="mailto:saravanachains19@gmail.com" className="f-body" style={{ color: 'var(--taupe)', fontSize: 13, textDecoration: 'none' }}>saravanachains19@gmail.com</a>
              <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 12, lineHeight: 1.7, opacity: 0.75 }}>42L, CVR Complex, South Avani Moola Street,<br />Madurai — 625001</p>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 28, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between' }}>
          <span className="f-mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--taupe)', opacity: 0.7 }}>© {new Date().getFullYear()} Saravana Chains Pvt. Ltd</span>
          <span className="f-mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--taupe)', opacity: 0.5 }}>Madurai, Tamil Nadu · Est. 2019</span>
        </div>
      </div>
    </footer>
  )
}
