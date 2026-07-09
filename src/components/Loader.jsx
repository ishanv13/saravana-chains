import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

// DOM preloader (outside the Canvas) — reads three's global loading state.
export default function Loader() {
  const { progress, active } = useProgress()
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => setGone(true), 650)
      return () => clearTimeout(t)
    }
  }, [active, progress])

  if (gone) return null
  const pct = Math.round(progress)

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'radial-gradient(120% 90% at 50% 40%, #17100A 0%, #0A0705 70%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 28,
        opacity: !active && progress >= 100 ? 0 : 1,
        transition: 'opacity .6s ease',
        pointerEvents: gone ? 'none' : 'auto',
      }}
    >
      <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)' }}>
        Saravana Chains
      </div>
      <div className="f-display" style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 1 }}>
        {String(pct).padStart(2, '0')}<span style={{ color: 'var(--gold-deep)', fontSize: '0.4em', verticalAlign: 'super' }}>%</span>
      </div>
      <div style={{ width: 'min(240px, 60vw)', height: 1, background: 'var(--line)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, width: `${pct}%`, background: 'linear-gradient(90deg, #8A6620, #F0D488)', transition: 'width .3s ease' }} />
      </div>
      <div className="f-mono" style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--taupe)' }}>
        Assaying 22K · Madurai
      </div>
    </div>
  )
}
