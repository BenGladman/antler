import React, { useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "./deerhead.glb?url";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";
import { useMousePos } from "./MousePos";
import { a, config, useSpring } from "@react-spring/three";

interface SpringProps {
  rotation: [x: number, y: number, z: number];
}

export function Deerhead() {
  const gltf = useLoader(GLTFLoader, model);
  const mesh = gltf.nodes.mesh_0 as THREE.Mesh;

  const [{ rotation }] = useSpring<SpringProps>(() => ({
    from: { rotation: [-1.8, 0, -1.2] },
    config: config.slow,
  }));

  const mousePos = useMousePos();

  useFrame(() => {
    rotation.start({
      to: [-1.8 + mousePos.y * 0.1, 0, -1.2 + mousePos.x * 0.3],
    });
  });

  return (
    <a.group rotation={rotation as any} position={[0, -7, 0]}>
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
    </a.group>
  );
}
