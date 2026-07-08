import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function JewelrySetModel(props) {
  const { scene } = useGLTF('/saravana-chains/chain_jewelry_set.glb')
  const group = useRef()
  const { viewport } = useThree()
  
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.metalness = 1
          child.material.roughness = 0.1
          child.material.envMapIntensity = 2.0
          child.material.needsUpdate = true
        }
      }
    })
  }, [scene])

  useFrame((state, delta) => {
    if (!group.current) return

    const offset = scrollProgress

    // We want this to appear at the end of the scroll.
    // The spacer is at the end. Suppose the spacer takes the last 20% of the scroll.
    // When offset is < 0.8, keep it hidden or far away.
    // When offset > 0.8, animate it into view.
    
    const animationProgress = Math.max(0, (offset - 0.75) * 4) // scales 0.75-1.0 to 0-1.0

    // "closed up manner which moves with scroll and arranged in a horizontal parallel manner"
    // We will bring it up from the bottom, very close to the camera (closed up).
    
    const isMobile = viewport.width < 5
    const startY = -viewport.height * 1.5
    const endY = 0

    // Zoomed in (close to camera)
    const targetZ = THREE.MathUtils.lerp(5, 8, animationProgress) // bringing it closer to z=10 (camera)

    const targetY = THREE.MathUtils.lerp(startY, endY, animationProgress)
    
    // Horizontal movement based on scroll
    const targetX = THREE.MathUtils.lerp(viewport.width * 0.5, -viewport.width * 0.2, animationProgress)

    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta)
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta)
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 4, delta)
    
    // Rotating it slightly
    const targetRotY = THREE.MathUtils.lerp(Math.PI * 0.5, Math.PI * -0.1, animationProgress)
    const targetRotX = THREE.MathUtils.lerp(0.5, 0, animationProgress)

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta)
  })

  const isMobile = viewport.width < 5
  const scale = isMobile ? 15 : 30 // adjust scale to match the other set

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Arranged in a horizontal parallel manner */}
      <primitive object={scene} scale={scale} position={[0, 0, 0]} />
      <primitive object={scene.clone()} scale={scale} position={[-isMobile ? 1.5 : 3, 0, -1]} />
      <primitive object={scene.clone()} scale={scale} position={[isMobile ? 1.5 : 3, 0, -1]} />
    </group>
  )
}

useGLTF.preload('/saravana-chains/chain_jewelry_set.glb')
