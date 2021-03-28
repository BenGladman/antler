import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

interface PointerPos {
  x: number;
  y: number;
  d: number;
}

const PointerPosContext = createContext<PointerPos>({ x: 0, y: 0, d: 0 });

export function PointerPosProvider({ children }: { children: ReactNode }) {
  const pointerPos = useMemo<PointerPos>(() => ({ x: 0, y: 0, d: 0 }), []);

  useEffect(() => {
    const listener = (e: PointerEvent) => {
      pointerPos.x = 2 * (e.clientX / window.innerWidth) - 1;
      pointerPos.y = 2 * (e.clientY / window.innerHeight) - 1;
      pointerPos.d = Math.sqrt(
        pointerPos.x * pointerPos.x + pointerPos.y * pointerPos.y
      );
    };
    document.addEventListener("pointermove", listener);
    return () => document.removeEventListener("pointermove", listener);
  }, []);

  return (
    <PointerPosContext.Provider value={pointerPos}>
      {children}
    </PointerPosContext.Provider>
  );
}

export function usePointerPos() {
  return useContext(PointerPosContext);
}
