import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storage } from '@/storage';

type ThemeMode = 'light' | 'dark';

type ConfigState = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

const INITIAL_STATE: NonActionProperties<ConfigState> = {
  themeMode: 'light',
};

const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setThemeMode: (mode: ThemeMode) => {
        set({ themeMode: mode });
      },
    }),
    { name: 'config-store-storage', storage: createJSONStorage(() => storage) }
  )
);

export default useConfigStore;
