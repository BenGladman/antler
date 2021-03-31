// model by https://www.turbosquid.com/Search/Artists/signSTUDIOS
// https://www.turbosquid.com/3d-models/free-flower-3d-model/618030

import { a, config, useSpring } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DEFAULT_LAYER } from "./consts";
import model from "./flower.glb?url";

function isMesh(node: THREE.Object3D): node is THREE.Mesh {
  return node instanceof THREE.Mesh;
}

export function Flower() {
  const gltf = useLoader(GLTFLoader, model);

  const [{ rotation, position }] = useSpring(() => ({
    from: { rotation: [0, 0, 0], position: [0, 10, 0] },
    to: { rotation: [3.2, 4.2, 2], position: [-2, 3, 3] },
    config: config.molasses,
  }));

  const meshes = Object.values(gltf.nodes).filter(isMesh);
  meshes.forEach((m) => m.geometry.computeVertexNormals());

  return (
    <a.group
      rotation={rotation as any}
      position={position as any}
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
          receiveShadow
          castShadow
        >
          <meshStandardMaterial color="#f0b" />
        </mesh>
      ))}
    </a.group>
  );
}
