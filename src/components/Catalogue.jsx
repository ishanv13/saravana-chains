import Reveal from './Reveal'
import { products } from '../data/products'

const order = ['Chains', 'Bracelets', 'Customised']
// number references continuously across groups, computed once
let counter = 0
const groups = order.map((cat) => ({
  cat,
  items: products.filter((p) => p.category === cat).map((p) => ({ ...p, no: (counter += 1) })),
}))

export default function Catalogue() {
  return (
    <section id="index" className="panel" style={{ justifyContent: 'center' }}>
      <div className="wrap">
        <div className="col-right" style={{ maxWidth: 640 }}>
          <Reveal><span className="rule-lead eyebrow">Ch. 04 — The Index</span></Reveal>
          <Reveal delay={80}>
            <h2 className="f-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.05, margin: '20px 0 10px' }}>
              An <span className="gold-text" style={{ fontStyle: 'italic' }}>index</span> of forms
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="f-mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--taupe)', textTransform: 'uppercase', marginBottom: 34 }}>
              {products.length} references · every one tunable to weight, length &amp; finish
            </p>
          </Reveal>

          <div className="index-grid">
            {groups.map((g) => (
              <Reveal key={g.cat} className="index-col">
                <div className="f-mono index-head">
                  {g.cat} <span style={{ color: 'var(--gold-deep)' }}>· {String(g.items.length).padStart(2, '0')}</span>
                </div>
                {g.items.map((p) => (
                  <div key={p.id} className="index-line">
                    <span className="index-num">{String(p.no).padStart(2, '0')}</span>
                    <span className="index-name">{p.name}</span>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 13.5, marginTop: 30 }}>
              <a href="https://wa.me/+919944442901" target="_blank" rel="noopener noreferrer" className="f-mono" style={{ color: 'var(--gold-hi)', textDecoration: 'none', letterSpacing: '0.08em' }}>Request the full catalogue →</a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
