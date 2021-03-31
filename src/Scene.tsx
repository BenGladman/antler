import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Flower } from "./Flower";
import { Lighting } from "./Lighting";

export function Scene() {
  return (
    <Canvas
      shadows
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: false }}
    >
      <Lighting />
      <Backlight />
      <Suspense fallback={null}>
        <Deerhead />
        <Flower />
      </Suspense>
      <Effects />
    </Canvas>
  );
}
