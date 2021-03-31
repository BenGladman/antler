// model by https://www.turbosquid.com/Search/Artists/signSTUDIOS
// https://www.turbosquid.com/3d-models/free-flower-3d-model/618030

import { a, config, useSpring } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";
import model from "./flower.glb?url";
import { usePointerPos } from "./PointerPos";

interface SpringProps {
  rotation: [x: number, y: number, z: number];
}

function isMesh(node: THREE.Object3D): node is THREE.Mesh {
  return node instanceof THREE.Mesh;
}

export function Flower() {
  const gltf = useLoader(GLTFLoader, model);

  const meshes = Object.values(gltf.nodes).filter(isMesh);
  meshes.forEach((m) => m.geometry.computeVertexNormals());

  console.log("mmmm", meshes);
  return (
    <group
      rotation={[3.2, 4.2, 2]}
      position={[-2, 3, 3]}
      scale={[0.05, 0.05, 0.05]}
    >
      {meshes.map((mesh, i) => (
        <mesh
          key={i}
          geometry={mesh.geometry}
          rotation={mesh.rotation}
          position={mesh.position}
          scale={mesh.scale}
          layers={[DEFAULT_LAYER]}
          // receiveShadow
          // castShadow
        >
          <meshStandardMaterial color="#f0b" />
        </mesh>
      ))}
      <mesh>
        <sphereBufferGeometry args={[4, 32, 32]} />
        <meshStandardMaterial color="#ffb" />
      </mesh>
    </group>
  );
}
