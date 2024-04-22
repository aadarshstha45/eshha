import { create } from "zustand";

type AchievementState = {
  displayCount: number;
  incrementDisplayCount: () => void;
  decrementDisplayCount: () => void;
};
const useAchievementStore = create<AchievementState>((set) => ({
  displayCount: 4,
  incrementDisplayCount: () =>
    set((state) => ({ displayCount: state.displayCount + 4 })),
  decrementDisplayCount: () => set(() => ({ displayCount: 4 })),
}));

type GalleryState = {
  displayCount: number;
  incrementDisplayCount: () => void;
  decrementDisplayCount: () => void;
};
const useGalleryStore = create<GalleryState>((set) => ({
  displayCount: 4,
  incrementDisplayCount: () =>
    set((state) => ({ displayCount: state.displayCount + 4 })),
  decrementDisplayCount: () => set(() => ({ displayCount: 4 })),
}));

type ActivityState = {
  displayCount: number;
  incrementDisplayCount: () => void;
  decrementDisplayCount: () => void;
};

const useActivityStore = create<ActivityState>((set) => ({
  displayCount: 4,
  incrementDisplayCount: () =>
    set((state) => ({ displayCount: state.displayCount + 4 })),
  decrementDisplayCount: () => set(() => ({ displayCount: 4 })),
}));

export { useAchievementStore, useActivityStore, useGalleryStore };
