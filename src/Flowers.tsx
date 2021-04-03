// model by https://www.turbosquid.com/Search/Artists/signSTUDIOS
// https://www.turbosquid.com/3d-models/free-flower-3d-model/618030

import { a, config, useSpring } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBeatSubscription, useChangeEnergy, useEnergy } from "./beat";
import { DEFAULT_LAYER } from "./consts";
import model from "./flower.glb?url";

function isMesh(node: THREE.Object3D): node is THREE.Mesh {
  return node instanceof THREE.Mesh;
}

interface FlowerProps {
  position: [number, number, number];
  scale: number;
  color?: string;
  onClick?: () => void;
}

function randomRotation(range: number) {
  return [
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
  ];
}

function Flower({
  position: pPosition,
  scale: pScale,
  color = "#f0b",
  onClick,
}: FlowerProps) {
  const gltf = useLoader(GLTFLoader, model);
  const [hover, setHover] = useState(false);

  const [{ rotation, position }] = useSpring(() => ({
    from: {
      rotation: randomRotation(10),
      position: [0, 9, 0],
    },
    to: {
      rotation: randomRotation(0.2),
      position: pPosition,
    },
    delay: 1000,
    config: config.molasses,
  }));

  const [{ scale, emissive }] = useSpring(() => ({
    from: { scale: pScale, emissive: 0 },
    to: { scale: pScale, emissive: 0 },
    config: config.gentle,
  }));

  useBeatSubscription(() => {
    rotation.start({
      to: randomRotation(0.3),
      config: { mass: 200, tension: 100, friction: 100 },
    });
  }, 3000);

  useEffect(() => {
    if (hover) {
      scale.start({ to: pScale * 1.2 });
      emissive.start({ to: 5 });
    } else {
      scale.start({ to: pScale });
      emissive.start({ to: 0 });
    }
  }, [hover, emissive, scale, pScale]);

  const meshes = Object.values(gltf.nodes).filter(isMesh);
  meshes.forEach((m) => m.geometry.computeVertexNormals());

  return (
    <a.group
      rotation={rotation as any}
      position={position as any}
      scale={scale as any}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={onClick}
    >
      <group rotation={[1.3, 0, 0.2]} scale={0.05} position={[-2, 0, -1]}>
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
            <a.meshStandardMaterial
              color={color}
              emissive={"#662" as any}
              emissiveIntensity={emissive}
            />
          </mesh>
        ))}
      </group>
    </a.group>
  );
}

export function Flowers() {
  const color = useEnergy(["#422", "#864", "#aa8"]);
  const changeEnergy = useChangeEnergy();

  return (
    <>
      <Flower position={[1, 0.4, -0.2]} scale={1} />
      <Flower position={[-1.2, 0.8, 0]} scale={1.2} />
      <Flower
        position={[2.7, 2.2, 0.3]}
        scale={0.7}
        onClick={changeEnergy}
        color={color}
      />
    </>
  );
}
