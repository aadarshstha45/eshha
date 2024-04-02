import { create } from "zustand";

type AchievementState = {
  displayCount: number;
  incrementDisplayCount: () => void;
  decrementDisplayCount: () => void;
};

export const useAchievementStore = create<AchievementState>((set) => ({
  displayCount: 4,
  incrementDisplayCount: () =>
    set((state) => ({ displayCount: state.displayCount + 4 })),
  decrementDisplayCount: () => set(() => ({ displayCount: 4 })),
}));
