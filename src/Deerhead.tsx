// model by https://sketchfab.com/ncassab
// https://sketchfab.com/3d-models/deerhead-faceted-8b578418eab44647b7f543eb0966b628

import { a, config, useSpring } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";
import model from "./deerhead.glb?url";
import { Flowers } from "./Flowers";

export function Deerhead() {
  const gltf = useLoader(GLTFLoader, model);
  const mesh = gltf.nodes.mesh_0 as THREE.Mesh;

  const [{ rotation }] = useSpring(() => ({
    from: { rotation: [0, 0, 0] },
    config: config.slow,
  }));

  useFrame((state) => {
    rotation.start({
      to: [state.mouse.y * -0.2, state.mouse.x * 0.3, 0],
    });
  });

  return (
    <a.group rotation={rotation as any}>
      <group rotation={[-1.8, 0, -1.6]} position={[0, -7, 0]}>
        <mesh
          geometry={mesh.geometry}
          layers={[DEFAULT_LAYER]}
          receiveShadow
          castShadow
        >
          <meshStandardMaterial color="#555" roughness={1} metalness={0.5} />
        </mesh>
        <mesh
          geometry={mesh.geometry}
          layers={[OCCLUSION_LAYER]}
          receiveShadow
          castShadow
        >
          <meshBasicMaterial color="#000" />
        </mesh>
      </group>
      <Flowers />
    </a.group>
  );
}
