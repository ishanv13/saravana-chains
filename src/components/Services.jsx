import FloatCard from './FloatCard'

const services = [
  { title: 'Manufacturer & Wholesaler', desc: 'Direct-from-manufacturer trade pricing for retailers and distributors across India. No middlemen, better margins.' },
  { title: 'Chains & Bracelets', desc: 'An extensive range of gold chains and bracelets — from classic rope and curb to modern IPL and Rajcot designs.' },
  { title: 'Customised Jewellery', desc: 'Bespoke gold ornaments crafted to your specification — ideal for branded gifting, bridal collections and special orders.' },
  { title: 'Machine Made & Handmade', desc: 'Machine-made precision for consistent quality at scale, and handmade artistry for heritage designs.' },
]

const positions = [
  { pos: { top: '13%', right: 'var(--edge)' }, from: 'right', delay: 120, drift: 1.1 },
  { pos: { top: '44%', left: '6%' }, from: 'left', delay: 220, drift: 2.4 },
  { pos: { bottom: '19%', right: '8%' }, from: 'right', delay: 300, drift: 0.6 },
  { pos: { bottom: '5%', left: 'var(--edge)' }, from: 'up', delay: 380, drift: 1.8 },
]

export default function Services() {
  return (
    <section id="craft" className="panel" style={{ minHeight: '125vh' }}>
      <FloatCard pos={{ top: '9%', left: 'var(--edge)' }} from="left" width={380}>
        <span className="rule-lead eyebrow">Ch. 02 — Capabilities</span>
        <h2 className="f-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 300, marginTop: 18 }}>
          What we <span className="gold-text" style={{ fontStyle: 'italic' }}>make</span>
        </h2>
      </FloatCard>

      {services.map((s, i) => (
        <FloatCard key={s.title} {...positions[i]} width={300}>
          <div className="f-mono" style={{ fontSize: 10.5, color: 'var(--gold-deep)', letterSpacing: '0.12em', marginBottom: 14 }}>
            {String(i + 1).padStart(2, '0')} / 04
          </div>
          <h3 className="f-display" style={{ fontSize: 19, fontWeight: 400, color: 'var(--ivory)', marginBottom: 10, lineHeight: 1.25 }}>{s.title}</h3>
          <p className="f-body" style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--taupe)' }}>{s.desc}</p>
        </FloatCard>
      ))}
    </section>
  )
}
