import { useState } from 'react'
import Reveal from './Reveal'
import ChainModal from './ChainModal'
import { products } from '../data/products'

const order = ['Chains', 'Bracelets', 'Customised']
// number references continuously across groups, computed once
let counter = 0
const groups = order.map((cat) => ({
  cat,
  items: products.filter((p) => p.category === cat).map((p) => ({ ...p, no: (counter += 1) })),
}))

export default function Catalogue() {
  const [selected, setSelected] = useState(null)

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
            <p className="f-mono" style={{ fontSize: 11.5, letterSpacing: '0.14em', color: 'var(--taupe)', textTransform: 'uppercase', marginBottom: 34 }}>
              {products.length} references · tap any reference for its photo &amp; detail
            </p>
          </Reveal>

          <div className="index-grid">
            {groups.map((g) => (
              <Reveal key={g.cat} className="index-col">
                <div className="f-mono index-head">
                  {g.cat} <span style={{ color: 'var(--gold-deep)' }}>· {String(g.items.length).padStart(2, '0')}</span>
                </div>
                {g.items.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="index-line"
                    onClick={() => setSelected(p)}
                    aria-haspopup="dialog"
                  >
                    <span className="index-num">{String(p.no).padStart(2, '0')}</span>
                    <span className="index-name">{p.name}</span>
                    <span className="index-open" aria-hidden="true">+</span>
                  </button>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 15, marginTop: 30 }}>
              <a href="https://wa.me/+919944442901" target="_blank" rel="noopener noreferrer" className="f-mono" style={{ color: 'var(--gold-hi)', textDecoration: 'none', letterSpacing: '0.08em' }}>Request the full catalogue →</a>
            </p>
          </Reveal>
        </div>
      </div>

      <ChainModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
