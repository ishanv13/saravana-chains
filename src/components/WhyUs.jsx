import { motion } from 'framer-motion'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '500+',
    label: 'Designs Available',
    desc: 'An expansive range of chain and bracelet styles to suit every market.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    value: 'B2B',
    label: 'Wholesale Focus',
    desc: 'Built for retailers, distributors and jewellery businesses - competitive trade pricing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    value: '100%',
    label: 'Custom Orders',
    desc: 'Your design, our craft. Bespoke jewellery made to exact specifications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '2019',
    label: 'Est. in Madurai',
    desc: "Over five years of manufacturing excellence from Tamil Nadu's gold capital.",
  },
]

export default function WhyUs() {
  return (
    <section style={{ padding: '112px 0', background: '#F0EBE1' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-10%', amount: 0.2 }}
            className="font-body"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#C9A84C', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
            Why Choose Us
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-10%', amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#1A1A1A', display: 'block' }}
          >
            The <em style={{ color: '#C9A84C' }}>Saravana</em> Difference
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="four-col">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: '-5%', amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: 'center',
                padding: 32,
                borderRadius: 16,
                background: '#FAF7F2',
                border: '1px solid #E8DDD0',
                transition: 'border-color 0.4s, box-shadow 0.4s',
              }}
              whileHover={{
                borderColor: 'rgba(201,168,76,0.4)',
                boxShadow: '0 8px 32px rgba(201,168,76,0.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', color: 'rgba(201,168,76,0.6)', marginBottom: 20 }}>
                {s.icon}
              </div>
              <div className="font-heading" style={{ fontSize: 36, fontWeight: 600, color: '#C9A84C', marginBottom: 8 }}>
                {s.value}
              </div>
              <div className="font-body" style={{ fontSize: 13, fontWeight: 500, color: '#1A1A1A', letterSpacing: '0.05em', marginBottom: 12 }}>
                {s.label}
              </div>
              <p className="font-body" style={{ fontSize: 12, color: '#9B9B9B', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
