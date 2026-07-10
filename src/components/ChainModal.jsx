import { useEffect, useRef } from 'react'

// Popup window for an index reference: the product photo from the original
// site alongside its trade details. Closes on ×, Esc, or backdrop click.
export default function ChainModal({ product, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!product) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  const wa = `https://wa.me/919944442901?text=${encodeURIComponent(`Wholesale enquiry — ${product.name}`)}`

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="modal-close f-mono" onClick={onClose} aria-label="Close">×</button>

        <div className="modal-img">
          <img src={product.img} alt={product.name} loading="lazy" />
        </div>

        <div className="modal-info">
          <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
            Ref {String(product.no ?? product.id).padStart(2, '0')} · {product.category}
          </div>
          <h3 className="f-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--ivory)', marginBottom: 16 }}>
            <span className="gold-text" style={{ fontStyle: 'italic' }}>{product.name}</span>
          </h3>
          <p className="f-body" style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--taupe)', marginBottom: 22 }}>
            {product.desc}
          </p>
          <div className="f-mono" style={{ fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 26, lineHeight: 2 }}>
            Au 916 · 22K
            <br />
            Weight, length &amp; finish to order
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ padding: '13px 22px' }}>
            Enquire about this piece
          </a>
        </div>
      </div>
    </div>
  )
}
