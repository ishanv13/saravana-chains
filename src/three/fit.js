import * as THREE from 'three'

// Bounds of any object (and its mesh descendants) expressed in a root space
// given by rootInv — the embedded FBX node transforms make accessor min/max useless.
export function boundsInRoot(object, rootInv) {
  const box = new THREE.Box3()
  const tmp = new THREE.Box3()
  const m = new THREE.Matrix4()
  object.traverse((o) => {
    if (!o.isMesh || !o.visible) return
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox()
    tmp.copy(o.geometry.boundingBox).applyMatrix4(m.multiplyMatrices(rootInv, o.matrixWorld))
    box.union(tmp)
  })
  return box
}

// Measure a GLTF scene's true bounds in its own root space, then return the
// scale that normalizes its longest side to `targetSize`, plus the recentre offset.
export function measureFit(scene, targetSize) {
  scene.updateMatrixWorld(true)
  const rootInv = new THREE.Matrix4().copy(scene.matrixWorld).invert()
  const box = boundsInRoot(scene, rootInv)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z) || 1
  return { scale: targetSize / maxDim, center, size, rootInv }
}
