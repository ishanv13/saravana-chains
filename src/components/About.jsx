import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

const stats = [
  { label: 'Est.', value: '2019' },
  { label: 'Focus', value: 'B2B' },
  { label: 'Orders', value: 'Custom' },
  { label: 'Origin', value: 'Madurai' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '112px 0', background: '#FAF7F2' }}>
      <div className="section-container">
        <div className="two-col">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', paddingBottom: 24 }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
              <img
                src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/08/Saravana-Chains-PVT.-LTD-21.jpeg"
                alt="Saravana Chains Gold Hollow Rope Chain"
                style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,8,0.4), transparent)', pointerEvents: 'none' }} />
              {/* Gold border frame */}
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none', borderRadius: 16 }} />
            </div>

            {/* Floating badge — positioned inside padded area to avoid overflow issues */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                background: '#C9A84C',
                color: '#ffffff',
                padding: '16px 24px',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <p className="font-heading" style={{ fontSize: 32, fontWeight: 600, lineHeight: 1 }}>2019</p>
              <p className="font-body" style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 4, color: 'rgba(255,255,255,0.8)' }}>Founded</p>
            </motion.div>

            {/* Decorative corner */}
            <div style={{ position: 'absolute', top: -16, left: -16, width: 48, height: 48, borderTop: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div {...fadeUp}>
              <span className="font-body" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#C9A84C', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 24 }}>
                <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#1A1A1A', lineHeight: 1.15, marginBottom: 24 }}
            >
              Rooted in Craft,
              <br />
              <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Refined in Gold</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body"
              style={{ color: '#6B6B6B', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}
            >
              Since 2019, Saravana Chains Pvt. Ltd has been crafting fine gold jewellery
              from the heart of Madurai - one of India's most storied goldsmithing cities.
              We combine traditional Tamil craftsmanship with modern manufacturing precision
              to produce chains and bracelets of exceptional quality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body"
              style={{ color: '#6B6B6B', fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}
            >
              As a dedicated manufacturer and wholesaler, we partner with retailers and
              businesses across India, offering both machine-made precision and the warmth
              of handcrafted jewellery - including fully customised ornaments to your specification.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, paddingTop: 32, borderTop: '1px solid #E8DDD0' }}
            >
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: '#C9A84C' }}>{s.value}</p>
                  <p className="font-body" style={{ fontSize: 10, color: '#9B9B9B', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
