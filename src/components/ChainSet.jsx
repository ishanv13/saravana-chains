import { useRef, useState, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll, anchor, range } from '../three/scroll'
import { sample } from '../three/timeline'
import { measureFit, boundsInRoot } from '../three/fit'
import { gallery, notifyGallery } from '../three/gallery'

const MODEL = '/saravana-chains/chain_set.glb'
const TARGET = 6.4 // world height of the showcase after normalization
const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// scratch vectors — no per-frame allocation
const _focusA = new THREE.Vector3()
const _focusB = new THREE.Vector3()
const _off = new THREE.Vector3()
const _ringWorld = new THREE.Vector3()

// Act II — the showcase of circular chains. Emerges from darkness, then the
// ring gallery: each circular chain is framed one at a time in close-up as the
// user scrolls, before receding to full view for the closing sections.
export default function ChainSet(props) {
  const { scene } = useGLTF(MODEL)
  const group = useRef()
  const { viewport } = useThree()
  const [fit, setFit] = useState(null)

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return
      // the artist named a backing box "Delete_showcase_box" — drop it
      if (child.material?.name?.startsWith('Delete')) { child.visible = false; return }
      if (child.material) {
        child.castShadow = child.receiveShadow = true
        child.material.metalness = 1
        child.material.roughness = 0.24
        child.material.envMapIntensity = 1.3
        child.material.needsUpdate = true
      }
    })

    const f = measureFit(scene, TARGET) // measured after hiding the Delete box

    // Each "N_ex" node is one circular chain on the stand — measure them
    // individually so the camera can visit them one by one.
    const ringNodes = []
    scene.traverse((o) => { if (/_ex$/.test(o.name)) ringNodes.push(o) })
    const rings = ringNodes
      .map((node) => {
        const box = boundsInRoot(node, f.rootInv)
        if (box.isEmpty()) return null
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        return { center, radius: Math.max(size.x, size.y, size.z) / 2 }
      })
      .filter(Boolean)
      .filter((r) => r.radius > 0.01)
      .sort((a, b) => b.radius - a.radius) // outermost ring first

    gallery.count = rings.length
    notifyGallery()
    setFit({ ...f, rings })
  }, [scene])

  useFrame((state, delta) => {
    const g = group.current
    if (!g || !fit) return
    const p = scroll.progress
    const mobile = viewport.width < 5
    const xf = mobile ? 0.4 : 1
    const sWorld = fit.scale * (mobile ? 0.82 : 1)

    const A_enter = anchor('stage-collection', 0.5)
    const A_gal = anchor('gallery', 0.56)
    const A_end = anchor('index', 0.82)
    const A_diff = anchor('difference', 0.9)
    const A_contact = anchor('contact', 0.96)

    const t = state.clock.elapsedTime
    const swayY = reduced ? 0 : Math.sin(t * 0.45) * 0.05
    const swayRy = reduced ? 0 : Math.sin(t * 0.2) * 0.05
    const L = 4

    const inGallery = fit.rings.length > 0 && p >= A_gal && p < A_end

    if (inGallery) {
      // ---- ring-by-ring close-ups ----
      const N = fit.rings.length
      const f01 = Math.min(range(p, A_gal, A_end) * N, N - 0.001)
      const i = Math.floor(f01)
      const frac = f01 - i
      // dwell on each ring for 60% of its segment, then glide to the next
      const k = frac < 0.6 ? 0 : (frac - 0.6) / 0.4
      const e = k * k * (3 - 2 * k)
      if (gallery.current !== i) { gallery.current = i; notifyGallery() }

      // slow continuous turn while visiting the rings
      const ryT = -0.15 + (i + e) * 0.22
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -0.06, L, delta)
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, ryT + swayRy, L, delta)

      // position the group so ring `idx` sits centred at close-up depth
      const poseFor = (idx, out) => {
        const r = fit.rings[Math.min(idx, N - 1)]
        const Rw = r.radius * sWorld
        // distance so the ring's diameter fills ~62% of the frame height
        const d = THREE.MathUtils.clamp((2 * Rw) / (0.63 * 0.62), 3.5, 15)
        const side = idx % 2 === 0 ? -1 : 1 // ring offset opposite the label
        // offset scales with the frustum width AT THIS DEPTH, so every ring sits
        // the same visual fraction off-centre regardless of its close/far distance
        const frameW = viewport.width * (d / 10)
        out.set(side * frameW * (mobile ? 0.1 : 0.19), mobile ? 0.5 : 0, 10 - d)
        _off.copy(r.center).sub(fit.center).multiplyScalar(sWorld).applyEuler(g.rotation)
        return out.sub(_off)
      }
      poseFor(i, _focusA)
      poseFor(i + 1, _focusB)
      _focusA.lerp(_focusB, e)

      g.position.x = THREE.MathUtils.damp(g.position.x, _focusA.x, L, delta)
      g.position.y = THREE.MathUtils.damp(g.position.y, _focusA.y + swayY * 0.4, L, delta)
      g.position.z = THREE.MathUtils.damp(g.position.z, _focusA.z, L, delta)

      // Pin the callout anchors to the ring's METAL (its left/right circumference
      // edge, not the hollow centre), re-projected post-damping every frame so the
      // leader lines stay fixed on the ring even while it glides between shots.
      const ring = fit.rings[i]
      const anchorTo = (sign, kx, ky) => {
        _ringWorld
          .set(ring.center.x + sign * ring.radius * 0.96, ring.center.y, ring.center.z)
          .sub(fit.center).multiplyScalar(sWorld).applyEuler(g.rotation).add(g.position)
          .project(state.camera)
        gallery[kx] = _ringWorld.x * 0.5 + 0.5
        gallery[ky] = 1 - (_ringWorld.y * 0.5 + 0.5)
      }
      anchorTo(-1, 'lx', 'ly')
      anchorTo(1, 'rx', 'ry')
    } else {
      // ---- keyframed shots outside the gallery ----
      const keys = [
        { p: A_enter,   x: 0,          y: 0.4,   z: -19,  rx: -0.05, ry: -0.9 },  // a glint in the dark
        { p: A_gal,     x: 0,          y: 0.2,   z: -9,   rx: -0.06, ry: -0.3 },  // approaching the stand
        { p: A_end,     x: -1.4 * xf,  y: 0.1,   z: -6,   rx: -0.07, ry: 0.9 },  // behind the index, left
        { p: A_diff,    x: 0,          y: 0.25,  z: -3.5, rx: -0.07, ry: 1.25 }, // full view, centred
        { p: A_contact, x: 0.4 * xf,   y: -0.35, z: -7.5, rx: -0.05, ry: 1.55 }, // settle far
        { p: 1,         x: 0.4 * xf,   y: -0.5,  z: -8.5, rx: -0.05, ry: 1.7 },
      ]
      const s = sample(keys, p)
      g.position.x = THREE.MathUtils.damp(g.position.x, s.x, L, delta)
      g.position.y = THREE.MathUtils.damp(g.position.y, s.y + swayY, L, delta)
      g.position.z = THREE.MathUtils.damp(g.position.z, s.z, L, delta)
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, s.rx, L, delta)
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, s.ry + swayRy, L, delta)
    }

    g.visible = p > A_enter - 0.04
  })

  if (!fit) return null
  const s = fit.scale * (viewport.width < 5 ? 0.82 : 1)

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={s}>
        <group position={[-fit.center.x, -fit.center.y, -fit.center.z]}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(MODEL)
