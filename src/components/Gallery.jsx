import { useEffect, useRef } from 'react'
import { gallery, useGallery } from '../three/gallery'
import { products } from '../data/products'

// ponytail: ring order in the GLB is unknown — names are drawn from the real
// catalogue in listed order; reorder this array if a ring reads as a mismatch.
const names = products.filter((p) => p.category === 'Chains').map((p) => p.name)

// Tall scroll runway: the 3D visits each circular chain in close-up while two
// callout cards — one per side — name it and give its spec, each tied to the
// ring on stage by a thin line so the info always reads as "attached" to it.
export default function Gallery() {
  const { count, current } = useGallery()
  const name = names[current % names.length] || 'Gold Chain'

  const dotRef = useRef(null)
  const lineLRef = useRef(null)
  const lineRRef = useRef(null)
  const cardLRef = useRef(null)
  const cardRRef = useRef(null)

  useEffect(() => {
    let raf
    const loop = () => {
      const x = gallery.sx * window.innerWidth
      const y = gallery.sy * window.innerHeight
      dotRef.current?.setAttribute('cx', x)
      dotRef.current?.setAttribute('cy', y)

      const wire = (lineEl, cardEl, edge) => {
        if (!lineEl || !cardEl) return
        const r = cardEl.getBoundingClientRect()
        lineEl.setAttribute('x1', x)
        lineEl.setAttribute('y1', y)
        lineEl.setAttribute('x2', edge === 'left' ? r.right : r.left)
        lineEl.setAttribute('y2', r.top + r.height / 2)
      }
      wire(lineLRef.current, cardLRef.current, 'left')
      wire(lineRRef.current, cardRRef.current, 'right')

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
          <circle ref={dotRef} className="gal-dot" r="3.5" />
        </svg>

        <div key={`${current}-l`} ref={cardLRef} className="gal-card left">
          <div className="fc-glass" style={{ padding: '20px 24px' }}>
            <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
              Ref {String(current + 1).padStart(2, '0')}{count ? ` / ${String(count).padStart(2, '0')}` : ''}
            </div>
            <h3 className="f-display" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ivory)' }}>
              <span className="gold-text" style={{ fontStyle: 'italic' }}>{name}</span>
            </h3>
          </div>
        </div>

        <div key={`${current}-r`} ref={cardRRef} className="gal-card right">
          <div className="fc-glass" style={{ padding: '20px 24px' }}>
            <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
              Specification
            </div>
            <p className="f-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--ivory)', lineHeight: 1.9 }}>
              Au 916 · 22K
              <br />
              Hand-finished · Wholesale
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
