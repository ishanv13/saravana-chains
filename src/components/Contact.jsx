import { motion } from 'framer-motion'
import { contact } from '../data/products'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.5.5 0 0 0 .614.614l5.7-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.51-5.228-1.398l-.374-.222-3.884.997.997-3.885-.222-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: 'Director',
    content: 'Suresh Kumar',
    sub: '+91 99444 42901',
    href: 'tel:+919944442901',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Shop Number',
    content: '+91 9597924916',
    href: 'tel:+919597924916',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    content: 'saravanachains19@gmail.com',
    href: 'mailto:saravanachains19@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    content: '42L, CVR Complex, South Avani Moola Street, Madurai, Tamil Nadu — 625001',
    href: contact.maps,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '112px 0', background: '#1A1208' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#C9A84C', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
            Get In Touch
            <span style={{ width: 32, height: 1, background: '#C9A84C', display: 'inline-block' }} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', display: 'block' }}
          >
            Visit or <em style={{ color: '#C9A84C' }}>Enquire</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-body"
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 12, maxWidth: 400, margin: '12px auto 0' }}
          >
            We welcome wholesale enquiries, custom order discussions and factory visits.
          </motion.p>
        </div>

        <div className="two-col">

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: 24,
                  border: '1px solid rgba(201,168,76,0.15)',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'}
              >
                <div style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p className="font-body" style={{ color: '#C9A84C', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</p>
                  <p className="font-heading" style={{ color: '#ffffff', fontSize: 17, fontWeight: 500 }}>{item.content}</p>
                  {item.sub && <p className="font-body" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 2 }}>{item.sub}</p>}
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: '16px 24px',
                background: '#25D366',
                color: '#ffffff',
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                marginTop: 8,
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#20b558'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              <WaIcon />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', height: 480, border: '1px solid rgba(201,168,76,0.2)', overflow: 'hidden' }}
          >
            <iframe
              title="Saravana Chains Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.018!2d78.1184!3d9.91950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f3f7c1!2sSARAVANA%20CHAINS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(30%) sepia(10%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              background: 'rgba(26,18,8,0.9)',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '12px 16px',
            }}>
              <p className="font-heading" style={{ color: '#ffffff', fontSize: 15, fontWeight: 500 }}>Saravana Chains Pvt. Ltd</p>
              <p className="font-body" style={{ color: '#C9A84C', fontSize: 11, marginTop: 2 }}>Madurai, Tamil Nadu</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
