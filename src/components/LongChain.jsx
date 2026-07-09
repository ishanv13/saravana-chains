import { useRef, useState, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll, anchor } from '../three/scroll'
import { sample } from '../three/timeline'
import { measureFit } from '../three/fit'

const MODEL = '/saravana-chains/chain_jewelry_set.glb'
const TARGET = 32 // world length of the strand after normalization
const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Act I — the long strand, shot like a camera dolly:
// far intro → macro close-up → full strand → drift right → fly past the lens.
// Camera sits at z=10 fov=35, so z here IS the close/far axis.
export default function LongChain(props) {
  const { scene } = useGLTF(MODEL)
  const group = useRef()
  const { viewport } = useThree()
  const [fit, setFit] = useState(null)

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.castShadow = child.receiveShadow = true
        child.material.metalness = 1
        child.material.roughness = 0.32
        child.material.envMapIntensity = 1.6
        child.material.side = THREE.DoubleSide
        child.material.needsUpdate = true
      }
    })
    setFit(measureFit(scene, TARGET))
  }, [scene])

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    const p = scroll.progress
    const mobile = viewport.width < 5
    const xf = mobile ? 0.5 : 1 // narrow screens keep the strand nearer centre

    // shot anchors measured from the real sections, so poses land exactly
    const A_macro = anchor('stage-macro', 0.14)
    const A_story = anchor('story', 0.28)
    const A_craft = anchor('craft', 0.42)
    const A_exit = anchor('stage-collection', 0.56)

    // The model is a flat spread of parallel strands (32 × 18 world after fit,
    // lying in XZ). rx ≈ -π/2 stands it up: a wall of gold chains facing the lens.
    const W = Math.PI / 2 // stand the flat spread up so its face meets the lens
    const keys = [
      { p: 0,       x: 2.6 * xf,  y: -0.4, z: -10,                rx: W - 0.18, rz: -0.08 }, // hero: full wall, held back right
      { p: A_macro, x: 0.4 * xf,  y: 0.2,  z: mobile ? 2.2 : 2.8, rx: W - 0.06, rz: -0.04 }, // MACRO: links fill frame
      { p: A_story, x: -2.4 * xf, y: 0,    z: -4,                 rx: W - 0.14, rz: 0.08 },  // full spread, left
      { p: A_craft, x: 2.4 * xf,  y: -0.2, z: -1.6,               rx: W - 0.1,  rz: -0.14 }, // drift right, mid
      { p: A_exit,  x: -0.5 * xf, y: 3.4,  z: 13,                 rx: W - 0.3,  rz: 0 },     // fly past the lens
    ]

    // breath baked into the damp target — additive-after-damp would accumulate
    const t = state.clock.elapsedTime
    const swayY = reduced ? 0 : Math.sin(t * 0.5) * 0.05
    const swayRx = reduced ? 0 : Math.sin(t * 0.3) * 0.05

    const s = sample(keys, p)
    const L = 4 // damping — smooths shot-to-shot without lag
    g.position.x = THREE.MathUtils.damp(g.position.x, s.x, L, delta)
    g.position.y = THREE.MathUtils.damp(g.position.y, s.y + swayY, L, delta)
    g.position.z = THREE.MathUtils.damp(g.position.z, s.z, L, delta)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, s.rx + swayRx, L, delta)
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, s.rz, L, delta)

    g.visible = p < A_exit + 0.05
  })

  if (!fit) return null
  const s = fit.scale * (viewport.width < 5 ? 0.8 : 1)

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={s}>
        {/* recentre using the measured bounds so the group pivots at the strand's middle */}
        <group position={[-fit.center.x, -fit.center.y, -fit.center.z]}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(MODEL)
