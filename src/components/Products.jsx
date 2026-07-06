import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { products, categories } from '../data/products'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.5.5 0 0 0 .614.614l5.7-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.51-5.228-1.398l-.374-.222-3.884.997.997-3.885-.222-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const slides = filtered.map((p) => ({ src: p.img, alt: p.name }))

  return (
    <section id="products" style={{ padding: '112px 0', background: '#FAF7F2' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#C9A84C', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
            Handcrafted Gold
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#1A1A1A', display: 'block' }}
          >
            Our <em style={{ color: '#C9A84C' }}>Catalogue</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-body"
            style={{ color: '#6B6B6B', fontSize: 14, marginTop: 12, maxWidth: 420, margin: '12px auto 0' }}
          >
            Click any piece to view in full — enquire directly via WhatsApp for wholesale pricing.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-body"
              style={{
                padding: '10px 24px',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: activeCategory === cat ? 'none' : '1px solid #E8DDD0',
                background: activeCategory === cat ? '#C9A84C' : 'transparent',
                color: activeCategory === cat ? '#ffffff' : '#6B6B6B',
                cursor: 'pointer',
                transition: 'all 0.25s',
                fontWeight: activeCategory === cat ? 500 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid — simple CSS grid, no layout animation to avoid glitching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="product-grid"
          >
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Wholesale CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: 72, paddingTop: 48, borderTop: '1px solid #E8DDD0' }}
        >
          <p className="font-heading" style={{ fontSize: 22, color: '#6B6B6B', fontStyle: 'italic', marginBottom: 24 }}>
            Interested in wholesale pricing or custom orders?
          </p>
          <a
            href="https://wa.me/+919944442901"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              background: '#C9A84C',
              color: '#ffffff',
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#9A7A2E'}
            onMouseLeave={e => e.currentTarget.style.background = '#C9A84C'}
          >
            <WaIcon />
            Get Wholesale Pricing
          </a>
        </motion.div>

      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={{ container: { backgroundColor: 'rgba(15,10,5,0.96)' } }}
      />
    </section>
  )
}

function ProductCard({ product, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onClick={onClick}
      className="card-hover"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#F0EBE1',
        aspectRatio: '3/4',
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
        loading="lazy"
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />

      {/* Hover overlay */}
      <div
        className="product-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,18,8,0.9) 0%, rgba(26,18,8,0.3) 50%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 16,
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0'}
      >
        <p className="font-heading" style={{ color: '#ffffff', fontSize: 15, fontWeight: 500, lineHeight: 1.3, marginBottom: 4 }}>
          {product.name}
        </p>
        <span className="font-body" style={{ color: '#C9A84C', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {product.category}
        </span>
      </div>

      {/* Always-visible expand icon on hover — handled via CSS in parent */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 32,
          height: 32,
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
        className="expand-icon"
      >
        <svg width="14" height="14" fill="none" stroke="#1A1A1A" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </div>

      <style>{`
        div:hover > .product-overlay { opacity: 1 !important; }
        div:hover > .expand-icon { opacity: 1 !important; }
      `}</style>
    </motion.div>
  )
}
