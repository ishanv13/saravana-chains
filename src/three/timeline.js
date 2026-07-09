// Keyframe timeline for scroll-driven shots.
// keys: [{ p, x, y, z, rx, ry, rz }] sorted by p — every key carries the same props.
// Between keys we smoothstep, so each "shot" eases in and out of its pose.
export function sample(keys, p) {
  if (p <= keys[0].p) return keys[0]
  const last = keys[keys.length - 1]
  if (p >= last.p) return last
  let i = 0
  while (p > keys[i + 1].p) i++
  const a = keys[i]
  const b = keys[i + 1]
  let t = (p - a.p) / (b.p - a.p)
  t = t * t * (3 - 2 * t) // smoothstep: ease-out of one pose, ease-in to the next
  const out = {}
  for (const k in a) {
    if (k === 'p') continue
    out[k] = a[k] + (b[k] - a[k]) * t
  }
  return out
}
