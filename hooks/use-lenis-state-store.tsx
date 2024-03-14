import { create } from "zustand";

export interface LenisStateStoreState {
  isScrollDisabled: boolean;
  setIsScrollDisabled: (bool: boolean) => void;
}

export const useLenisStateStore = create<LenisStateStoreState>((set) => ({
  isScrollDisabled: false,
  setIsScrollDisabled: (bool) => set((state) => ({ isScrollDisabled: bool })),
}));
