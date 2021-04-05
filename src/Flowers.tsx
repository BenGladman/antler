// model by https://www.turbosquid.com/Search/Artists/signSTUDIOS
// https://www.turbosquid.com/3d-models/free-flower-3d-model/618030

import { a, config, useSpring } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBeatLevel, useBeatSubscription, useSetBeatLevel } from "./beat";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";
import model from "./flower.glb?url";

function isMesh(node: THREE.Object3D): node is THREE.Mesh {
  return node instanceof THREE.Mesh;
}

interface FlowerProps {
  position: [number, number, number];
  scale: number;
  color: string;
  onClick: () => void;
  showRing: boolean;
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
  color,
  onClick,
  showRing,
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

  const [{ ringScale, ringOpacity }, ringRef] = useSpring(() => ({
    from: { ringScale: 0, ringOpacity: 0 },
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

  useEffect(() => {
    if (showRing) {
      ringRef.start({
        loop: {
          from: { ringScale: 1, ringOpacity: 1 },
          to: { ringScale: 2, ringOpacity: 0 },
          delay: 0,
        },
        config: config.molasses,
        delay: 5000,
      });
    } else {
      ringRef.start({ to: { ringScale: 0, ringOpacity: 0 } });
    }
  }, [showRing]);

  const meshes = Object.values(gltf.nodes).filter(isMesh);
  meshes.forEach((m) => m.geometry.computeVertexNormals());

  return (
    <>
      <a.group
        rotation={rotation as any}
        position={position as any}
        scale={scale as any}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={onClick}
      >
        <group
          rotation={[1.3, 0, 0.2]}
          scale={0.05}
          position={[-1.3, -1.25, -0.5]}
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
              <a.meshLambertMaterial
                color={color}
                emissive={"#662" as any}
                emissiveIntensity={emissive}
              />
            </mesh>
          ))}
        </group>
      </a.group>
      <a.group position={position as any} scale={ringScale} visible={showRing}>
        <mesh layers={[DEFAULT_LAYER]} scale={pScale}>
          <ringGeometry args={[0.95, 1, 20]} />
          <a.lineBasicMaterial color="#88f" opacity={ringOpacity} transparent />
        </mesh>
      </a.group>
    </>
  );
}

export function Flowers() {
  const [clicked0, setClicked0] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const color0 = useBeatLevel(["#9cc", "#336", "#44a"]);
  const color1 = useBeatLevel(["#336", "#a63", "#44a"]);
  const color2 = useBeatLevel(["#336", "#336", "#aa8"]);
  const setBeatLevel = useSetBeatLevel();

  return (
    <>
      <Flower
        position={[0.2, 1.6, -0.8]}
        scale={1}
        onClick={() => {
          setBeatLevel(0);
          setClicked0(true);
        }}
        color={color0}
        showRing={!clicked0}
      />
      <Flower
        position={[-2, 2, -0.6]}
        scale={1.2}
        onClick={() => {
          setBeatLevel(1);
          setClicked1(true);
        }}
        color={color1}
        showRing={clicked0 && !clicked1}
      />
      <Flower
        position={[1.9, 3, -0.3]}
        scale={0.7}
        onClick={() => {
          setBeatLevel(2);
          setClicked2(true);
        }}
        color={color2}
        showRing={clicked0 && clicked1 && !clicked2}
      />
    </>
  );
}
