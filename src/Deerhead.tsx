import React, { useMemo } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "./deerhead.glb?url";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";

export function Deerhead() {
  const gltf = useLoader(GLTFLoader, model);
  const mesh = gltf.nodes.mesh_0 as THREE.Mesh;

  return (
    <group rotation={[-1.8, 0, -1.2]} position={[0, -7, 0]}>
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
  );
}
