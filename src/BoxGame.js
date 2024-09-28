import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { animated } from '@react-spring/three'
import { Suspense } from 'react'


function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], userData: {name: "Plane"}, ...props }))

  return (
    <mesh receiveShadow ref={ref} key="ASDF">
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" />
    </mesh>
  )
}

function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 1, onCollide: (e) => {
    if(e.body.userData.name === "Plane") {
      api.velocity.set(0,7,0); props.userData.onClick("#" + ((1<<24)*Math.random() | 0).toString(16))
    }
  }, ...props, userData: {name: "DASDF"} }))

  return (
    <animated.mesh onClick={() => props.userData.onClick('#fe4365')}  castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={"orange"}/>
    </animated.mesh>
  )
}

export default function BoxGame() {
  const [ready, set] = useState(false)
  const [items, setItems] = useState([])
  const [bg, setbg] = useState('#171720')


  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const renderedItems = items.map(() => {
    return <Cube userData={{onClick: (value) => setbg(value)}} position={[0, 6, -0.3]} />
  })
  return (
    <div style={{height: "100%", width: "100%", position: "fixed"}}>
      <button onClick={() => setItems([...items, 4])}>Add stuff</button>
      <Canvas dpr={[1, 2]} style={{display: "block"}} shadows camera={{ position: [-5, 3, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1}/>
          <fog attach="fog" args={[bg, 10, 50]} />
          <color attach="background" args={[bg]} />
          <spotLight color="white" angle={0.25} penumbra={1} intensity={1} position={[10, 10, 5]} castShadow />
          {/* <Model /> */}
          <Physics>
            <Plane />
            {ready && <Cube userData={{onClick: (value) => setbg(value)}} position={[-0.45, 10, 0.25]} />}
            {renderedItems}
          </Physics>
          <OrbitControls screenSpacePanning />
          </Suspense>
      </Canvas>
    </div>
  )
}
