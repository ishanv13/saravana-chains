import FloatCard from './FloatCard'
import { contact } from '../data/products'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.5.5 0 0 0 .614.614l5.7-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.51-5.228-1.398l-.374-.222-3.884.997.997-3.885-.222-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="panel" style={{ minHeight: '125vh' }}>
      <FloatCard pos={{ top: '7%', left: 'var(--edge)' }} from="left" width={460}>
        <span className="rule-lead eyebrow">Ch. 06 — Enquire</span>
        <h2 className="f-display" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.05, margin: '16px 0 14px' }}>
          Let's talk <span className="shimmer" style={{ fontStyle: 'italic', fontWeight: 500 }}>gold</span>
        </h2>
        <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 14.5, lineHeight: 1.75 }}>
          We welcome wholesale enquiries, custom-order discussions and factory visits.
        </p>
      </FloatCard>

      <FloatCard pos={{ top: '14%', right: 'var(--edge)' }} from="right" delay={120} drift={1.3} width={300}>
        <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Director</div>
        <a href="tel:+919944442901" style={{ textDecoration: 'none' }}>
          <div className="f-display" style={{ fontSize: 17, color: 'var(--ivory)' }}>Suresh Kumar</div>
          <div className="f-mono" style={{ fontSize: 12, color: 'var(--taupe)', marginTop: 4 }}>+91 99444 42901</div>
        </a>
      </FloatCard>

      <FloatCard pos={{ top: '42%', right: '7%' }} from="right" delay={220} drift={2.1} width={300}>
        <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Shop</div>
        <a href="tel:+919597924916" style={{ textDecoration: 'none' }}>
          <div className="f-display" style={{ fontSize: 17, color: 'var(--ivory)' }}>+91 95979 24916</div>
        </a>
      </FloatCard>

      <FloatCard pos={{ bottom: '30%', right: 'var(--edge)' }} from="right" delay={300} drift={0.9} width={320}>
        <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Email</div>
        <a href="mailto:saravanachains19@gmail.com" style={{ textDecoration: 'none' }}>
          <div className="f-display" style={{ fontSize: 16, color: 'var(--ivory)', wordBreak: 'break-word' }}>saravanachains19@gmail.com</div>
        </a>
      </FloatCard>

      <FloatCard pos={{ bottom: '24%', left: '8%' }} from="left" delay={260} drift={1.7} width={340}>
        <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Atelier</div>
        <a href={contact.maps} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="f-display" style={{ fontSize: 16, color: 'var(--ivory)', lineHeight: 1.5 }}>
            42L, CVR Complex, South Avani Moola Street, Madurai — 625001
          </div>
        </a>
      </FloatCard>

      <FloatCard pos={{ bottom: '5%', left: 'var(--edge)' }} from="up" delay={380} drift={0.4}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-solid"><WaIcon /> Chat on WhatsApp</a>
          <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Find us in Madurai →</a>
        </div>
      </FloatCard>
    </section>
  )
}
