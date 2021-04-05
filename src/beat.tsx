import { useEffect, useState } from "react";
import create, { State } from "zustand";

type Level = 0 | 1 | 2;
interface BeatState extends State {
  beat: number;
  level: Level;
  setLevel: (level: Level) => void;
  nextBeat: () => void;
}

const useStore = create<BeatState>((set) => ({
  beat: 0,
  level: 0,
  setLevel: (level) => set((s) => ({ level })),
  nextBeat: () => set((s) => ({ beat: s.beat + 1 })),
}));

export function useBeat() {
  return useStore((s) => s.beat);
}

export function useBeatLevel<T>(values: [T, T, T]) {
  const level = useStore((s) => s.level);
  return values[level];
}

export function useSetBeatLevel() {
  return useStore((s) => s.setLevel);
}

export function useBeatSubscription(
  fn: (beat: number, level: Level) => void,
  delay?: number
) {
  const [delaying, setDelaying] = useState(Boolean(delay));

  useEffect(() => {
    if (!delaying) {
      return;
    }
    const timerId = setTimeout(() => setDelaying(false), delay);
    return () => clearTimeout(timerId);
  }, [delay, delaying]);

  useEffect(() => {
    if (delaying) {
      return;
    }
    return useStore.subscribe((s) => fn(s.beat, s.level));
  }, [delaying, fn]);
}

export function useBeatInterval() {
  const nextBeat = useStore((s) => s.nextBeat);
  const ms = useBeatLevel([3200, 1600, 800]);

  useEffect(() => {
    const timerId = setInterval(nextBeat, ms);
    return () => clearInterval(timerId);
  }, [ms, nextBeat]);
}
