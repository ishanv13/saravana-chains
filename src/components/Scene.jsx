import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import ChainModel from './ChainModel'
import JewelrySetModel from './JewelrySetModel'

export default function Scene() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#CA8A04" />
        
        {/* Realistic luxury gold reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <ChainModel />
          <JewelrySetModel />
        </Suspense>

        {/* Soft shadow on the bottom */}
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
      </Canvas>
    </div>
  )
}
