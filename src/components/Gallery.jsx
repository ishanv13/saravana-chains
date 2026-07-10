import { useEffect, useRef, useState } from 'react'
import { gallery, useGallery } from '../three/gallery'
import { products } from '../data/products'
import ChainModal from './ChainModal'

// ponytail: ring order in the GLB is unknown — details are drawn from the real
// catalogue in listed order; reorder if a ring reads as a mismatch.
const chains = products.filter((p) => p.category === 'Chains')

// Tall scroll runway: the 3D visits each circular chain in close-up. EVERY ring
// owns its own pair of info containers (name left, details right), mounted
// simultaneously and choreographed by scroll: the active chain's cards slide in,
// passed chains' cards slide out upward, upcoming ones wait below — reversible
// in both scroll directions. Leader lines pin to the active ring's metal edge,
// re-projected every frame. Name cards open that chain's photo popup.
export default function Gallery() {
  const { count, current } = useGallery()
  const [selected, setSelected] = useState(null)

  const dotLRef = useRef(null)
  const dotRRef = useRef(null)
  const lineLRef = useRef(null)
  const lineRRef = useRef(null)
  const itemRefs = useRef([]) // per-ring { left, right } card elements

  useEffect(() => {
    let raf
    const loop = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const active = itemRefs.current[gallery.current]
      const wire = (dotEl, lineEl, cardEl, fx, fy, edge) => {
        if (!dotEl || !lineEl) return
        if (!cardEl) { dotEl.setAttribute('r', 0); return }
        dotEl.setAttribute('r', 3.5)
        const x = fx * w
        const y = fy * h
        dotEl.setAttribute('cx', x)
        dotEl.setAttribute('cy', y)
        const r = cardEl.getBoundingClientRect()
        lineEl.setAttribute('x1', x)
        lineEl.setAttribute('y1', y)
        lineEl.setAttribute('x2', edge === 'left' ? r.right : r.left)
        lineEl.setAttribute('y2', r.top + r.height / 2)
      }
      wire(dotLRef.current, lineLRef.current, active?.left, gallery.lx, gallery.ly, 'left')
      wire(dotRRef.current, lineRRef.current, active?.right, gallery.rx, gallery.ry, 'right')
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="gallery" aria-label="Chain close-up gallery" style={{ position: 'relative', minHeight: '440vh' }}>
      <div className="gal-sticky">
        <span className="rule-lead eyebrow gal-eyebrow">Ch. 03 — In the Round</span>

        <svg className="gal-wires" aria-hidden="true">
          <line ref={lineLRef} className="gal-wire" />
          <line ref={lineRRef} className="gal-wire" />
          <circle ref={dotLRef} className="gal-dot" r="3.5" />
          <circle ref={dotRRef} className="gal-dot" r="3.5" />
        </svg>

        {Array.from({ length: count }, (_, i) => {
          const chain = chains[i % chains.length]
          const state = i === current ? 'active' : i < current ? 'past' : 'future'
          return (
            <div key={i} className={`gal-item ${state}`} aria-hidden={i !== current}>
              <div
                className="gal-card left"
                ref={(el) => { itemRefs.current[i] = { ...itemRefs.current[i], left: el } }}
              >
                <button
                  type="button"
                  className="fc-glass gal-open"
                  style={{ padding: '20px 24px' }}
                  onClick={() => setSelected({ ...chain, no: i + 1 })}
                  aria-haspopup="dialog"
                  tabIndex={i === current ? 0 : -1}
                >
                  <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                    Ref {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                  </div>
                  <h3 className="f-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ivory)' }}>
                    <span className="gold-text" style={{ fontStyle: 'italic' }}>{chain?.name || 'Gold Chain'}</span>
                  </h3>
                  <p className="f-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 10 }}>
                    Au 916 · 22K
                  </p>
                  <p className="f-mono gal-hint" aria-hidden="true">View photo +</p>
                </button>
              </div>

              <div
                className="gal-card right"
                ref={(el) => { itemRefs.current[i] = { ...itemRefs.current[i], right: el } }}
              >
                <div className="fc-glass" style={{ padding: '20px 24px' }}>
                  <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                    Details
                  </div>
                  <p className="f-body gal-desc" style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ivory)' }}>
                    {chain?.desc || 'Drawn, formed and finished in Madurai.'}
                  </p>
                  <p className="f-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 12 }}>
                    Hand-finished · Wholesale
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <ChainModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
