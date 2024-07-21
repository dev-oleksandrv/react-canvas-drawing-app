import { DEFAULT_COLOR, DEFAULT_SIZE } from '../common/constants.ts';
import { DrawConfigurationMode } from '../common/enums.ts';

import { create } from 'zustand';

export interface DrawConfigurationState {
  currentMode: DrawConfigurationMode;
  updateCurrentMode: (currentMode: DrawConfigurationMode) => void;

  currentColor: string;
  updateCurrentColor: (currentColor: string) => void;

  currentSize: number;
  updateCurrentSize: (currentSize: number) => void;
}

export const useDrawConfigurationStore = create<DrawConfigurationState>(
  (set) => ({
    currentMode: DrawConfigurationMode.Draw,
    updateCurrentMode: (currentMode: DrawConfigurationMode) =>
      set({ currentMode }),

    currentColor: DEFAULT_COLOR.value,
    updateCurrentColor: (currentColor: string) => set({ currentColor }),

    currentSize: DEFAULT_SIZE,
    updateCurrentSize: (currentSize: number) => set({ currentSize }),
  })
);
