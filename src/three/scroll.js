import { useEffect, useState } from 'react'

// ponytail: one module-level value + one listener, shared by every model's
// useFrame instead of a listener per component. rAF-throttled.
export const scroll = { progress: 0 }

// Section anchors: p at which a section's top reaches the viewport top.
// Cached; invalidated on resize or when the document height changes.
const _anchors = new Map()
let _lastHeight = 0

export function anchor(id, fallback = 0) {
  const total = document.documentElement.scrollHeight - window.innerHeight
  if (document.documentElement.scrollHeight !== _lastHeight) {
    _anchors.clear()
    _lastHeight = document.documentElement.scrollHeight
  }
  if (!_anchors.has(id)) {
    const el = document.getElementById(id)
    if (!el || total <= 0) return fallback // don't cache misses (HMR/mount gaps)
    _anchors.set(id, Math.min(1, el.offsetTop / total))
  }
  return _anchors.get(id)
}

let started = false
export function startScrollTracking() {
  if (started || typeof window === 'undefined') return () => {}
  started = true
  let ticking = false
  const measure = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight
    scroll.progress = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0
    ticking = false
  }
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(measure) }
  }
  const onResize = () => { _anchors.clear(); measure() }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  measure()
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
    started = false
  }
}

// map v from [a,b] -> [0,1], clamped
export function range(v, a, b) {
  if (b === a) return 0
  return Math.min(1, Math.max(0, (v - a) / (b - a)))
}

// React-facing progress (for DOM chrome like the assay frame)
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf
    const loop = () => { setP(scroll.progress); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  return p
}
