import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, PerspectiveCamera, AdaptiveDpr } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'
import LongChain from './LongChain'
import ChainSet from './ChainSet'

export default function Scene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }} aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.25 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />

        {/* base lights */}
        <ambientLight intensity={0.5} />
        <hemisphereLight args={['#fff1d4', '#241a0e', 0.7]} />
        <directionalLight position={[5, 6, 6]} intensity={2.2} color="#fff3d6" />
        <directionalLight position={[-6, 2, 4]} intensity={1.1} color="#ffe9bf" />
        <directionalLight position={[-4, -3, -4]} intensity={0.7} color="#b8862f" />
        {/* camera-facing fill: keeps whatever faces the viewer lit at any rotation */}
        <directionalLight position={[0, 1, 9]} intensity={1.7} color="#ffedcb" />

        {/* controlled studio rig — no external HDRI, tuned for specular gold */}
        <Environment resolution={256}>
          <Lightformer intensity={3.4} position={[0, 3, 4]} scale={[10, 5, 1]} color="#fff6e2" />
          <Lightformer intensity={4} position={[-5, 1, 1]} scale={[3, 9, 1]} color="#ffffff" />
          <Lightformer intensity={3.2} position={[5, 0, 2]} scale={[4, 9, 1]} color="#ffe6b0" />
          <Lightformer intensity={2} position={[0, -1, 5]} scale={[10, 6, 1]} color="#caa24a" />
          <Lightformer intensity={0.7} position={[0, -4, 0]} scale={[12, 12, 1]} rotation-x={Math.PI / 2} color="#2a1d0c" />
        </Environment>

        <Suspense fallback={null}>
          <LongChain />
          <ChainSet />
        </Suspense>

        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  )
}
