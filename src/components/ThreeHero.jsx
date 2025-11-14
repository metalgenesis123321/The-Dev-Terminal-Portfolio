import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WavePlane(){ 
  const ref = React.useRef()
  useFrame((state)=>{
    const t = state.clock.getElapsedTime()
    if(ref.current){
      const pos = ref.current.geometry.attributes.position
      for(let i=0;i<pos.count;i++){
        const y = Math.sin((i + t*2) / 8) * 0.12
        pos.setY(i, y)
      }
      pos.needsUpdate = true
    }
  })
  return (
    <mesh ref={ref} rotation-x={-Math.PI/2} position={[0,-1.8,0]}>
      <planeGeometry args={[12,12,80,80]} />
      <meshStandardMaterial roughness={1} metalness={0} color={'#05202a'} transparent opacity={0.6} />
    </mesh>
  )
}

export default function ThreeHero(){
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
        <color attach="background" args={['#071017']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={0.6} />
        <WavePlane />
      </Canvas>
    </div>
  )
}