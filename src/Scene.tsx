import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Backlight } from "./Backlight";
import { useBeatInterval, useBeatLevel, useShowInfo } from "./beat";
import { Ceremony, Dancing, Dinner } from "./content";
import { Deerhead } from "./Deerhead";
import { Effects } from "./Effects";
import { Lighting } from "./Lighting";

export function Scene() {
  useBeatInterval();
  const background = useBeatLevel(["#223441", "#212122", "#161118"]);
  const Content = useBeatLevel([Ceremony, Dinner, Dancing]);
  const showInfo = useShowInfo();

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
      {showInfo && <Content />}
    </>
  );
}
