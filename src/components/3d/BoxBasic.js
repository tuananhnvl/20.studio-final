import React,{useRef} from 'react'
import { useFrame } from '@react-three/fiber'

export default function BoxBasic() {
  const mesh = useRef(null)
  useFrame(() => {
    mesh.current.rotation.x += 0.005
    mesh.current.rotation.y += 0.005
  })
  
  return (
   
    <mesh ref={mesh} onScroll={(e) => {console.log(e)}}>
    <boxGeometry attach="geometry" args={[1, 1, 1]} />
    <meshNormalMaterial attach="material" />
  </mesh>
  
  
  )
}
