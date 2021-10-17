import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Bee(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/bee_gltf.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 5, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head_new001.geometry}
          material={nodes.head_new001.material}
          position={[0, 0.17, 0.18]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[136.03, 136.03, 136.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object012.geometry}
          material={nodes.Object012.material}
          position={[0, 0.03, -0.42]}
        />
        <group position={[-0.3, -0.01, -0.05]}>
          <group position={[-0.21, 0, -0.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vent_left001.geometry}
              material={nodes.vent_left001.material}
              position={[0.51, 0.18, 0.24]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[136.03, 136.03, 136.03]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_base_left001.geometry}
            material={nodes.vent_base_left001.material}
            position={[0.3, 0.18, 0.23]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[136.03, 136.03, 136.03]}
          />
        </group>
        <group position={[0.3, -0.01, -0.05]} rotation={[0, 0, Math.PI]}>
          <group position={[-0.21, 0, -0.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vent_left001001.geometry}
              material={nodes.vent_left001001.material}
              position={[0.51, -0.18, 0.24]}
              rotation={[Math.PI / 2, 0, Math.PI]}
              scale={[136.03, 136.03, 136.03]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_base_right001.geometry}
            material={nodes.vent_base_right001.material}
            position={[0.3, -0.18, 0.23]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[136.03, 136.03, 136.03]}
          />
        </group>
        <group position={[-0.25, 0.09, 0.11]} rotation={[0, 1.31, 0]}>
          <group position={[-0.24, 0, 0]} rotation={[0, 0, -0.7]}>
            <group
              position={[-0.17, 0, -0.01]}
              rotation={[1.57, 0.01, 0]}
              scale={[1.18, 0.39, 1.18]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wrist_2.geometry}
                material={nodes.wrist_2.material}
                position={[-0.02, 0.03, 0]}
                rotation={[-3.14, 0.01, -0.01]}
                scale={[0.97, 4.31, 0.84]}
              />
            </group>
            <group position={[-0.17, 0, 0]}>
              <group position={[0, 0, 0.02]} rotation={[1.57, 0.01, 0]} scale={[1.2, 0.39, 1.2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wrist_1.geometry}
                  material={nodes.wrist_1.material}
                  position={[-0.02, -0.04, 0]}
                  rotation={[0, -0.01, 0.01]}
                  scale={[0.96, 4.25, 0.83]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.forearm.geometry}
              material={nodes.forearm.material}
              position={[-0.01, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wrist_0.geometry}
              material={nodes.wrist_0.material}
              position={[-0.17, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoulder.geometry}
            material={nodes.shoulder.material}
            position={[-0.03, 0, -0.01]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.15, 1.15, 1.15]}
          />
        </group>
        <group position={[0, 0.01, 0.08]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[0, 0, 0.16]}>
            <group position={[0, 0, 0.11]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.base_part_2_low001.geometry}
                material={nodes.base_part_2_low001.material}
                position={[0, 0, -0.02]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[129.76, 129.76, 129.76]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Box001.geometry}
                material={nodes.Box001.material}
                position={[-0.01, 0, 0.1]}
                scale={[1.06, 1.06, 1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Box002.geometry}
                  material={nodes.Box002.material}
                  position={[0, 0, 0.06]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Box003.geometry}
                    material={nodes.Box003.material}
                    position={[0, 0, 0.01]}
                    scale={[0.9, 0.9, 0.9]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.pathcord_new_2.geometry}
                      material={nodes.pathcord_new_2.material}
                      position={[-0.02, 0, -0.08]}
                      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                      scale={[98.44, 98.44, 98.44]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Box006.geometry}
                        material={nodes.Box006.material}
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        scale={[0.01, 0.01, 0.01]}
                      />
                    </mesh>
                  </mesh>
                </mesh>
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.base_part_1_low001.geometry}
              material={nodes.base_part_1_low001.material}
              position={[0.17, 0, -0.06]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[136.03, 136.03, 136.03]}
            />
          </group>
        </group>
        <group position={[0.22, 0.08, 0.1]} rotation={[-0.02, -1.22, -3.08]}>
          <group position={[-0.24, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <group position={[-0.17, 0, 0]}>
              <group position={[0, 0, -0.01]} rotation={[1.57, 0.01, 0]} scale={[1.18, 0.39, 1.18]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object013.geometry}
                  material={nodes.Object013.material}
                  position={[-0.02, 0.03, 0.03]}
                />
              </group>
              <group position={[0, 0, 0.02]} rotation={[1.57, 0.01, 0]} scale={[1.2, 0.39, 1.2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Box009.geometry}
                  material={nodes.Box009.material}
                  position={[-0.02, -0.04, 0.03]}
                  scale={[0.99, 0.99, 0.99]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.forearm001.geometry}
              material={nodes.forearm001.material}
              position={[-0.01, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wrist_003.geometry}
                material={nodes.wrist_003.material}
                position={[0, 0.01, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              />
            </mesh>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoulder001.geometry}
            material={nodes.shoulder001.material}
            position={[-0.03, 0, -0.01]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.15, 1.15, 1.15]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backpack_gloss.geometry}
          material={materials.transp_1}
          position={[0, 0.17, 0.18]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[136.03, 136.03, 136.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backpack_low001.geometry}
          material={nodes.backpack_low001.material}
          position={[0, 0.17, 0.18]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[136.03, 136.03, 136.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_body_v2.geometry}
          material={nodes.base_body_v2.material}
          position={[0.01, -0.01, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={nodes.Sphere001.material}
          position={[0, -0.44, -0.04]}
          rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object.geometry}
            material={nodes.Object.material}
            position={[0, 0, 0]}
            scale={[1.29, 1.29, 0.85]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/bee_gltf.gltf')

