import { a, config, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";
import { useMousePos } from "./MousePos";

interface SpringProps {
  position: [x: number, y: number, z: number];
}
export function Backlight() {
  const [{ position }] = useSpring<SpringProps>(() => ({
    from: { position: [0, 0, -20] },
    config: config.molasses,
  }));

  const mousePos = useMousePos();

  useFrame(() => {
    position.start({
      to: [mousePos.x * -10, mousePos.y * -5, mousePos.d * -30 - 10],
    });
  });

  const geometry = <sphereBufferGeometry args={[6, 32, 32]} />;
  return (
    <a.group position={position as any}>
      <mesh layers={[DEFAULT_LAYER]} scale={[0.98, 0.98, 0.98]}>
        {geometry}
        <meshBasicMaterial transparent opacity={0.5} color="#44f" />
      </mesh>
      <mesh layers={[OCCLUSION_LAYER]}>
        {geometry}
        <meshBasicMaterial color="#acf" />
      </mesh>
    </a.group>
  );
}
