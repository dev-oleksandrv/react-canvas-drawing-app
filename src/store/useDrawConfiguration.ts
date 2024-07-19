import { DEFAULT_COLOR } from '../common/constants.ts';

import { create } from 'zustand';

export interface DrawConfigurationState {
  currentColor: string;
  updateCurrentColor: (currentColor: string) => void;
}

export const useDrawConfigurationStore = create<DrawConfigurationState>(
  (set) => ({
    currentColor: DEFAULT_COLOR.value,
    updateCurrentColor: (currentColor: string) => set({ currentColor }),
  })
);
