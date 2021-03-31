import { a, config, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";

interface SpringProps {
  position: [x: number, y: number, z: number];
}
export function Backlight() {
  const [{ position }] = useSpring<SpringProps>(() => ({
    from: { position: [0, 0, -20] },
    config: config.molasses,
  }));

  useFrame(({ mouse }) => {
    const d = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
    position.start({
      to: [mouse.x * -10, mouse.y * -5, d * -30 - 10],
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
