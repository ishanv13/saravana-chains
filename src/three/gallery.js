import { useEffect, useState } from 'react'

// Shared state between the 3D gallery (ChainSet) and the DOM callout cards.
// sx/sy = the on-screen ring position as viewport fractions (0-1), updated every
// frame by ChainSet's useFrame — read imperatively (not via React state) so the
// leader lines can track it at 60fps without forcing a re-render every frame.
export const gallery = { count: 0, current: 0, sx: 0.5, sy: 0.42 }

export function useGallery() {
  const [s, setS] = useState({ count: 0, current: 0 })
  useEffect(() => {
    let raf
    const loop = () => {
      setS((prev) =>
        prev.count === gallery.count && prev.current === gallery.current
          ? prev
          : { count: gallery.count, current: gallery.current }
      )
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  return s
}
