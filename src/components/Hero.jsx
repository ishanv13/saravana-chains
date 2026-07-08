import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Content */}
      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}
        >
          <img
            src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-6.52.43-PM-300x300.jpeg"
            alt="Saravana Chains Logo"
            style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '2px solid #CA8A04', padding: 4 }}
          />
        </motion.div>

        {/* Est. badge */}
        <motion.div {...fadeUp(0.2)} style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span className="font-body" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'rgba(202, 138, 4, 0.7)', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            <span style={{ width: 32, height: 1, background: 'rgba(202, 138, 4, 0.4)', display: 'inline-block' }} />
            Est. 2019
            <span style={{ width: 32, height: 1, background: 'rgba(202, 138, 4, 0.4)', display: 'inline-block' }} />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.35)}
          className="font-heading"
          style={{ fontWeight: 300, fontSize: 'clamp(3.5rem, 10vw, 7rem)', color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 16 }}
        >
          Saravana
          <br />
          <span className="shimmer-text" style={{ fontWeight: 500 }}>Chains</span>
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          {...fadeUp(0.5)}
          className="font-heading"
          style={{ fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'rgba(202, 138, 4, 0.8)', letterSpacing: '0.05em', marginTop: 16, marginBottom: 12 }}
        >
          Crafting Gold Since 2019
        </motion.p>

        {/* Descriptor */}
        <motion.p
          {...fadeUp(0.6)}
          className="font-body"
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', maxWidth: 400, margin: '0 auto 48px' }}
        >
          Manufacturer &amp; Wholesaler · Madurai, Tamil Nadu
        </motion.p>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.65)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48 }}
        >
          <span style={{ width: 64, height: 1, background: 'linear-gradient(to right, transparent, rgba(202, 138, 4, 0.5))', display: 'inline-block' }} />
          <span style={{ color: 'rgba(202, 138, 4, 0.6)', fontSize: 12 }}>✦</span>
          <span style={{ width: 64, height: 1, background: 'linear-gradient(to left, transparent, rgba(202, 138, 4, 0.5))', display: 'inline-block' }} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16 }}
        >
          <a
            href="https://wa.me/+919944442901"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 28px',
              background: '#A16207',
              color: '#ffffff',
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 32,
              transition: 'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#CA8A04' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#A16207' }}
          >
            <WaIcon />
            Enquire on WhatsApp
          </a>
          <a
            href="#products"
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              border: '1px solid rgba(202, 138, 4, 0.5)',
              color: '#CA8A04',
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 32,
              transition: 'background 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(202, 138, 4, 0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            View Catalogue
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <span className="font-body" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(202, 138, 4, 0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.5.5 0 0 0 .614.614l5.7-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.51-5.228-1.398l-.374-.222-3.884.997.997-3.885-.222-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}
