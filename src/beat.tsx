import { debounce } from "debounce";
import { useEffect, useState } from "react";
import create, { State } from "zustand";
import shallow from "zustand/shallow";

interface BeatState extends State {
  beat: number;
  energy: number;
  changeEnergy: () => void;
  nextBeat: () => void;
}

const useStore = create<BeatState>((set) => ({
  beat: 0,
  energy: 0,
  changeEnergy: debounce(
    () => set((s) => ({ energy: (s.energy + 1) % 3 })),
    50
  ),
  nextBeat: () => set((s) => ({ beat: s.beat + 1 })),
}));

export function useBeat() {
  return useStore((s) => s.beat);
}

export function useEnergy() {
  return useStore((s) => s.energy);
}

export function useChangeEnergy() {
  return useStore((s) => s.changeEnergy);
}

export function useBeatSubscription(
  fn: (beat: number, energy: number) => void,
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
    return useStore.subscribe((s) => fn(s.beat, s.energy));
  }, [delaying, fn]);
}

export function useBeatInterval() {
  const [energy, nextBeat] = useStore((s) => [s.energy, s.nextBeat], shallow);

  useEffect(() => {
    console.log("energy", energy);
    const ms = energy === 0 ? 5000 : energy === 1 ? 2000 : 1000;

    const timerId = setInterval(nextBeat, ms);
    return () => clearInterval(timerId);
  }, [energy, nextBeat]);
}
