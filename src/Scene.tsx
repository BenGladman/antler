import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { useBeatInterval } from "./beat";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Lighting } from "./Lighting";

export function Scene() {
  useBeatInterval();

  return (
    <Canvas
      shadows
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: true }}
    >
      <Lighting />
      <Backlight />
      <Suspense fallback={null}>
        <Deerhead />
      </Suspense>
      <Effects />
    </Canvas>
  );
}
