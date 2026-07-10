import { useEffect, useState } from 'react'

// Shared state between the 3D gallery (ChainSet) and the DOM callout cards.
// lx/ly and rx/ry = the on-screen position of the current ring's LEFT and RIGHT
// metal edge as viewport fractions (0-1), re-projected every frame by ChainSet's
// useFrame — read imperatively by the leader-line loop, no React state involved.
export const gallery = { count: 0, current: 0, lx: 0.35, ly: 0.45, rx: 0.65, ry: 0.45 }

// count/current reach React via subscription (NOT rAF polling — rAF is
// suspended in occluded tabs, and there's no reason to poll what we can push).
const listeners = new Set()
export function notifyGallery() {
  listeners.forEach((fn) => fn())
}

export function useGallery() {
  const [s, setS] = useState({ count: gallery.count, current: gallery.current })
  useEffect(() => {
    const sync = () =>
      setS((prev) =>
        prev.count === gallery.count && prev.current === gallery.current
          ? prev
          : { count: gallery.count, current: gallery.current }
      )
    listeners.add(sync)
    sync() // catch a model that loaded before this component mounted
    return () => listeners.delete(sync)
  }, [])
  return s
}
