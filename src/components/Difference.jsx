import FloatCard from './FloatCard'

const stats = [
  { value: '500+', label: 'Designs Available', desc: 'An expansive range of chain and bracelet styles for every market.' },
  { value: 'B2B', label: 'Wholesale Focus', desc: 'Built for retailers, distributors and jewellery businesses.' },
  { value: '100%', label: 'Custom Orders', desc: 'Your design, our craft — made to exact specification.' },
  { value: '2019', label: 'Est. in Madurai', desc: "Manufacturing from Tamil Nadu's gold capital." },
]

const positions = [
  { pos: { top: '12%', right: 'var(--edge)' }, from: 'right', delay: 100, drift: 1.2 },
  { pos: { top: '48%', left: '5%' }, from: 'left', delay: 200, drift: 2.0 },
  { pos: { bottom: '15%', right: '7%' }, from: 'right', delay: 300, drift: 0.5 },
  { pos: { bottom: '5%', left: '12%' }, from: 'up', delay: 380, drift: 1.6 },
]

export default function Difference() {
  return (
    <section id="difference" className="panel" style={{ minHeight: '115vh' }}>
      <FloatCard pos={{ top: '9%', left: 'var(--edge)' }} from="left" width={400}>
        <span className="rule-lead eyebrow">Ch. 05 — The Difference</span>
        <h2 className="f-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 300, marginTop: 18 }}>
          Why jewellers <span className="gold-text" style={{ fontStyle: 'italic' }}>choose us</span>
        </h2>
      </FloatCard>

      {stats.map((s, i) => (
        <FloatCard key={s.label} {...positions[i]} width={270}>
          <div style={{ textAlign: 'center' }}>
            <div className="f-display gold-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 500, lineHeight: 1 }}>{s.value}</div>
            <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory)', margin: '12px 0 8px' }}>{s.label}</div>
            <p className="f-body" style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--taupe)' }}>{s.desc}</p>
          </div>
        </FloatCard>
      ))}
    </section>
  )
}
