import FloatCard from './FloatCard'

const WA = 'https://wa.me/+919944442901'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.5.5 0 0 0 .614.614l5.7-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.51-5.228-1.398l-.374-.222-3.884.997.997-3.885-.222-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="panel">
      <FloatCard pos={{ top: '16%', left: 'var(--edge)' }} from="left" width={480}>
        <span className="rule-lead eyebrow">Gold Chain Manufacturers</span>
        <h1 className="f-display" style={{ fontWeight: 300, fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', lineHeight: 0.98, letterSpacing: '-0.02em', marginTop: 20 }}>
          Saravana
          <br />
          <span className="shimmer" style={{ fontWeight: 500, fontStyle: 'italic' }}>Chains</span>
        </h1>
        <p className="f-body" style={{ color: 'var(--taupe)', fontSize: 'clamp(1.05rem, 1.8vw, 1.15rem)', lineHeight: 1.7, marginTop: 20 }}>
          A Madurai atelier drawing gold into chains and bracelets —
          machine-precise, hand-finished, supplied wholesale to jewellers across India.
        </p>
      </FloatCard>

      <FloatCard pos={{ bottom: '26%', left: 'var(--edge)' }} from="up" delay={200} drift={1.0} width={380}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[['Est.', '2019'], ['Trade', 'Wholesale'], ['Purity', '22K · 916']].map(([k, v]) => (
            <div key={k}>
              <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>{k}</div>
              <div className="f-mono" style={{ fontSize: 16, color: 'var(--ivory)', marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </FloatCard>

      <FloatCard pos={{ bottom: '8%', left: 'var(--edge)' }} from="up" delay={320} drift={0.5}>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid"><WaIcon /> Enquire on WhatsApp</a>
          <a href="#index" className="btn btn-ghost">View the Range</a>
        </div>
      </FloatCard>

      <div className="scroll-cue" aria-hidden="true">
        <span className="f-mono" style={{ fontSize: 10.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--taupe)' }}>Scroll to examine</span>
        <span className="scroll-cue-line" />
      </div>

      <style>{`
        .scroll-cue { position: absolute; bottom: calc(var(--edge) + 14px); left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 1; }
        .scroll-cue-line { width: 1px; height: 34px; background: linear-gradient(var(--gold), transparent); animation: cue 1.8s ease-in-out infinite; transform-origin: top; }
        @keyframes cue { 0%,100% { transform: scaleY(.4); opacity: .4; } 50% { transform: scaleY(1); opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .scroll-cue-line { animation: none; }
        }
      `}</style>
    </section>
  )
}
