import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { useBeatInterval, useBeatLevel, useShowInfo } from "./beat";
import { Content } from "./Content";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Lighting } from "./Lighting";

export function Scene() {
  useBeatInterval();
  const background = useBeatLevel(["#223441", "#212122", "#161118"]);

  return (
    <>
      <Canvas
        shadows
        style={{ background }}
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
      <Content />
    </>
  );
}
