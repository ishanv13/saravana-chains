import FloatCard from './FloatCard'

const stats = [
  ['Founded', '2019'],
  ['Focus', 'B2B Wholesale'],
  ['Orders', 'Custom'],
  ['Origin', 'Madurai'],
]

export default function Story() {
  return (
    <section id="story" className="panel" style={{ minHeight: '115vh' }}>
      <FloatCard pos={{ top: '10%', left: 'var(--edge)' }} from="left" width={440}>
        <span className="rule-lead eyebrow">Ch. 01 — Provenance</span>
        <h2 className="f-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.08, marginTop: 18 }}>
          Rooted in craft,<br /><span className="gold-text" style={{ fontStyle: 'italic' }}>refined in gold.</span>
        </h2>
      </FloatCard>

      <FloatCard pos={{ top: '32%', right: 'var(--edge)' }} from="right" delay={140} drift={1.4} width={350}>
        <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 14.5, lineHeight: 1.8 }}>
          Since 2019, Saravana Chains has drawn fine gold jewellery from the heart of
          Madurai — one of India's most storied goldsmithing cities — pairing traditional
          Tamil craftsmanship with modern manufacturing precision.
        </p>
      </FloatCard>

      <FloatCard pos={{ bottom: '18%', left: '10%' }} from="up" delay={240} drift={2.2} width={350}>
        <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 14.5, lineHeight: 1.8 }}>
          As a dedicated manufacturer and wholesaler, we supply retailers and jewellers
          across India — machine-made consistency, handmade warmth, and fully bespoke
          ornaments made to your specification.
        </p>
      </FloatCard>

      <FloatCard pos={{ bottom: '6%', right: '9%' }} from="up" delay={340} drift={0.8} width={430}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {stats.map(([label, value]) => (
            <div key={label}>
              <div className="f-display gold-text" style={{ fontSize: '1.15rem', fontWeight: 500 }}>{value}</div>
              <div className="f-mono" style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </FloatCard>
    </section>
  )
}
