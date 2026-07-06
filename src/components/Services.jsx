import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Manufacturer & Wholesaler',
    desc: 'Direct-from-manufacturer pricing for retailers and distributors across India. No middlemen, better margins.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: 'Chains & Bracelets',
    desc: 'An extensive range of gold chains and bracelets - from classic rope and curb to modern IPL and Rajcot designs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Customised Jewellery',
    desc: 'Bespoke gold ornaments crafted to your design specifications. Perfect for branded gifting, bridal collections and special orders.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Machine Made & Handmade',
    desc: 'The best of both worlds - machine-made precision for consistent quality at scale, and handmade artistry for heritage designs.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '112px 0', background: '#1A1208' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#C9A84C', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 20 }}
          >
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
            What We Offer
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', display: 'block' }}
          >
            Our <em style={{ color: '#C9A84C' }}>Services</em>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="four-col">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative',
                padding: 32,
                borderRadius: 16,
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 100%)',
                transition: 'border-color 0.4s',
                cursor: 'default',
              }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
            >
              <div style={{ color: 'rgba(201,168,76,0.7)', marginBottom: 24 }}>
                {s.icon}
              </div>

              <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 500, color: '#ffffff', marginBottom: 12, lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p className="font-body" style={{ color: '#9B9B9B', fontSize: 13, lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
