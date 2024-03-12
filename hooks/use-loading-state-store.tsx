import { create } from "zustand";

export interface LoadingStateStoreState {
  loading: boolean;
  loaded: () => void;
}

export const useLoadingStateStore = create<LoadingStateStoreState>((set) => ({
  loading: true,
  loaded: () => set((state) => ({ loading: false })),
}));
