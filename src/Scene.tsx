// based on https://codesandbox.io/s/r3f-volumetric-light-w633u

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Flower } from "./Flower";
import { Lighting } from "./Lighting";
import { PointerPosProvider } from "./PointerPos";

export function Scene() {
  return (
    <Canvas
      shadowMap
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: false }}
    >
      <PointerPosProvider>
        <Lighting />
        <Backlight />
        <Suspense fallback={null}>
          <Deerhead />
          <Flower />
        </Suspense>
        <Effects />
      </PointerPosProvider>
    </Canvas>
  );
}
