import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: (by: number) => void;
  removeAll: () => void;
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state: any) => ({ bears: state.bears + by })),
  removeAll: () => set({ bears: 0 }),
}));

export default useBearStore;
