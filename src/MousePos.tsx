import React, { createContext, useContext, useEffect, useMemo } from "react";

interface MousePos {
  x: number;
  y: number;
  d: number;
}

const MousePosContext = createContext<MousePos>({ x: 0, y: 0, d: 0 });

export function MousePosProvider({ children }: { children: React.ReactNode }) {
  const mousePos = useMemo<MousePos>(() => ({ x: 0, y: 0, d: 0 }), []);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      mousePos.x = 2 * (e.clientX / window.innerWidth) - 1;
      mousePos.y = 2 * (e.clientY / window.innerHeight) - 1;
      mousePos.d = Math.sqrt(mousePos.x * mousePos.x + mousePos.y * mousePos.y);
    };
    document.addEventListener("mousemove", listener);
    return () => document.removeEventListener("mousemove", listener);
  }, []);

  return (
    <MousePosContext.Provider value={mousePos}>
      {children}
    </MousePosContext.Provider>
  );
}

export function useMousePos() {
  return useContext(MousePosContext);
}
