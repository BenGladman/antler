import { a, config, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useBeatSubscription } from "./beat";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";

const COLORS = [
  [
    { color1: "hsl(216,90%,63%)", color2: "hsl(216,90%,83%)" },
    { color1: "hsl(152,80%,63%)", color2: "hsl(152,80%,83%)" },
    { color1: "hsl(305,80%,63%)", color2: "hsl(305,80%,83%)" },
  ],
  [
    { color1: "hsl(310,40%,38%)", color2: "hsl(310,40%,50%)" },
    { color1: "hsl(22,40%,38%)", color2: "hsl(22,40%,50%)" },
    { color1: "hsl(68,40%,38%)", color2: "hsl(68,40%,50%)" },
  ],
  [
    { color1: "hsl(10,90%,38%)", color2: "hsl(10,90%,50%)" },
    { color1: "hsl(115,90%,38%)", color2: "hsl(115,90%,50%)" },
    { color1: "hsl(248,90%,38%)", color2: "hsl(248,90%,50%)" },
  ],
];

export function Backlight() {
  const [{ position }] = useSpring(() => ({
    from: { position: [0, 0, -20] },
    config: config.molasses,
  }));

  const [{ color1, color2 }, colRef] = useSpring(() => ({
    from: {
      color1: "#000",
      color2: "#222",
    },
    to: {
      color1: "#444",
      color2: "#ccc",
    },
    config: {
      duration: 3000,
    },
  }));

  useFrame(({ mouse }) => {
    const d = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
    position.start({
      to: [mouse.x * -10, mouse.y * -5, d * -30 - 10],
    });
  });

  useBeatSubscription((beat, level) => {
    colRef.start({
      to: COLORS[level][beat % 3],
      config: level === 0 ? config.molasses : config.default,
    });
  }, 5000);

  const geometry = <sphereBufferGeometry args={[6, 32, 32]} />;
  return (
    <a.group position={position as any}>
      <mesh layers={[DEFAULT_LAYER]} scale={[0.98, 0.98, 0.98]}>
        {geometry}
        <a.meshBasicMaterial transparent opacity={0.5} color={color1} />
      </mesh>
      <mesh layers={[OCCLUSION_LAYER]}>
        {geometry}
        <a.meshBasicMaterial color={color2} />
      </mesh>
    </a.group>
  );
}
