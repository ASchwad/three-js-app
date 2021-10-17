import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import Bee from './assets/Bee'


function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return (
    <mesh receiveShadow ref={ref} key="ASDF">
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" />
    </mesh>
  )
}

function Cube(props) {
  const [active, setActive] = useState(false)
  // const ref = useRef()
  // onCollide: (data) => console.log(data)
  const [ref, api] = useBox(() => ({ mass: 1, onCollide: (e) => {
    console.log(e)
    api.velocity.set(0,7,0); props.userData.onClick("#" + ((1<<24)*Math.random() | 0).toString(16))
  }, ...props, userData: {name: "DASDF"} }))

  // const { position } = useSpring({ position: active ? [0,-10,0] : props.position })
  // useFrame(({clock}) => {
  //   // console.log(clock.elapsedTime)
  //   ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3
  //   // ref.current.args = [Math.sin(clock.getElapsedTime()) * 0.3, Math.sin(clock.getElapsedTime()) * 0.8, Math.sin(clock.getElapsedTime()) * 0.3]
  // })

  return (
    <animated.mesh onClick={() => props.userData.onClick('#fe4365')}  castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={active? "orange":"pink"}/>
      {/* <Html distanceFactor={10}>
        <div class="content">
          hello <br />
          world: {ref.current?.userData.name}
        </div>
      </Html> */}
    </animated.mesh>
  )
}

function Suzi(props) {
  const { nodes } = useGLTF('/suzanne-draco.glb')

  return (
    <mesh geometry={nodes.Suzanne.geometry} {...props}>
      <meshPhysicalMaterial />
    </mesh>
  )
}

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "./yoda.gltf");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.4} />
//     </>
//   );
// };


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
            {/* <Bee  /> */}
            {/* <Cube position={[0.45, 7, -0.25]} />
            <Cube position={[-0.45, 9, 0.25]} /> */}
            {ready && <Cube userData={{onClick: (value) => setbg(value)}} position={[-0.45, 10, 0.25]} />}
            {renderedItems}
          </Physics>
          <OrbitControls screenSpacePanning />
          </Suspense>
      </Canvas>
    </div>
  )
}
