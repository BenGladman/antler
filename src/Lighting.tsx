import { a, config, useSpring } from "@react-spring/three";
import React from "react";
import { useBeatSubscription } from "./beat";

const INTENSE_COLORS = [
  "hsl(310,80%,50%)",
  "hsl(22,80%,50%)",
  "hsl(68,80%,50%)",
  "hsl(248,90%,70%)",
  "hsl(10,90%,50%)",
  "hsl(115,90%,50%)",
];

function randomColor() {
  return INTENSE_COLORS[Math.floor(Math.random() * 6)];
}

export function Lighting() {
  const [{ color1, color2, color3 }, colRef] = useSpring(() => ({
    from: {
      color1: "#888",
      color2: "#888",
      color3: "#888",
    },
    to: {
      color1: "#fff",
      color2: "#fff",
      color3: "#fff",
    },
    config: {
      duration: 3000,
    },
  }));

  useBeatSubscription((_beat, level) => {
    switch (level) {
      case 0:
        colRef.start({
          to: {
            color1: "#dff",
            color2: "#dff",
            color3: "#dff",
          },
          config: config.slow,
        });
        break;
      case 1:
        colRef.start({
          to: {
            color1: "#faa",
            color2: "#faa",
            color3: "#faa",
          },
          config: config.slow,
        });
        break;
      default:
        colRef.start({
          to: {
            color1: randomColor(),
            color2: randomColor(),
            color3: randomColor(),
          },
          config: config.default,
        });
        break;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <a.pointLight position={[0, 60, -100]} intensity={20} color={color1} />
      <a.pointLight position={[-50, 0, -50]} intensity={2} color={color2} />
      <a.spotLight
        castShadow
        intensity={8}
        angle={0.31}
        position={[10, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color={color3}
      />
    </>
  );
}
