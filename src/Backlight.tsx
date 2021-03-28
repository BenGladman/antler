import React from "react";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";

export function Backlight() {
  const geometry = <sphereBufferGeometry args={[6, 32, 32]} />;
  return (
    <group position={[0, 0, -10]}>
      <mesh layers={[DEFAULT_LAYER]} scale={[0.98, 0.98, 0.98]}>
        {geometry}
        <meshBasicMaterial transparent opacity={0.5} color="#44f" />
      </mesh>
      <mesh layers={[OCCLUSION_LAYER]}>
        {geometry}
        <meshBasicMaterial color="#acf" />
      </mesh>
    </group>
  );
}
