import { useEffect, useRef, useState } from 'react'

// A floating glass card: flies in the first time it scrolls into view, then
// drifts on a gentle bob so the composition feels alive around the 3D stage.
//   pos    — desktop absolute placement, e.g. { top: '12%', left: 'var(--edge)' }
//   from   — fly-in direction: 'left' | 'right' | 'up' | 'down'
//   delay  — fly-in stagger in ms
//   drift  — bob phase offset in seconds (vary per card so they don't sync)
//   width  — max-width in px
export default function FloatCard({ pos = {}, from = 'up', delay = 0, drift = 0, width, className = '', style, children }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`float-card fly-${from} ${seen ? 'in' : ''} ${className}`}
      style={{ '--fc-delay': `${delay}ms`, ...(width ? { maxWidth: width } : {}), ...pos, ...style }}
    >
      <div className="fc-glass" style={{ '--fc-drift': `${drift}s` }}>{children}</div>
    </div>
  )
}
