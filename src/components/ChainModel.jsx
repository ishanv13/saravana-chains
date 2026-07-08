import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function ChainModel(props) {
  const { scene } = useGLTF('/saravana-chains/chain_set.glb')
  const group = useRef()
  const { viewport } = useThree()
  
  // Track scroll manually for fixed background
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Init
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.metalness = 1
          child.material.roughness = 0.2
          child.material.envMapIntensity = 1.5
          child.material.needsUpdate = true
        }
      }
    })
  }, [scene])

  useFrame((state, delta) => {
    if (!group.current) return

    const offset = scrollProgress

    // Animate position relative to scroll
    // Start at center, move down slightly and snake horizontally
    let targetY = THREE.MathUtils.lerp(0, -viewport.height * 0.8, offset)
    let targetX = Math.sin(offset * Math.PI * 6) * (viewport.width * 0.3)
    let targetZ = 0

    // Fly out logic at the end of the scroll (offset > 0.75) to make room for the new set
    if (offset > 0.75) {
      const flyOutProgress = (offset - 0.75) * 4
      targetY += flyOutProgress * viewport.height * 2
      targetZ += flyOutProgress * 15 // fly towards/past camera
    }

    // Rotations based on scroll
    const targetRotX = offset * Math.PI * 2
    const targetRotY = offset * Math.PI * 4
    const targetRotZ = offset * Math.PI * 1.5

    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta)
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta)
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 4, delta)
    
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta)
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, targetRotZ, 4, delta)

    // Breathing effect
    const t = state.clock.getElapsedTime()
    group.current.position.y += Math.sin(t) * 0.003
  })

  // Adjust scale based on viewport size
  const isMobile = viewport.width < 5
  const scale = isMobile ? 12 : 25 // .glb scale might be different, let's assume it needs a specific scale. Adjust if necessary.

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}

useGLTF.preload('/saravana-chains/chain_set.glb')
