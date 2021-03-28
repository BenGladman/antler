// based on https://codesandbox.io/s/r3f-volumetric-light-w633u
// model by https://sketchfab.com/ncassab
// https://sketchfab.com/3d-models/deerhead-faceted-8b578418eab44647b7f543eb0966b628

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Lighting } from "./Lighting";
import { MousePosProvider } from "./MousePos";

export function Scene() {
  return (
    <Canvas
      shadowMap
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: false }}
    >
      <MousePosProvider>
        <Lighting />
        <Backlight />
        <Suspense fallback={null}>
          <Deerhead />
        </Suspense>
        <Effects />
      </MousePosProvider>
    </Canvas>
  );
}
