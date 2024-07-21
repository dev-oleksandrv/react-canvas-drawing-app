import { Color } from '../types/common.ts';
import { DrawConfigurationMode } from './enums.ts';

export const DEFAULT_COLOR: Color = {
  label: 'Cafe Noir',
  value: '#4C2E05',
};

export const COLORS: Color[] = [
  DEFAULT_COLOR,
  {
    label: 'Celadon',
    value: '#BEE7B8',
  },
  {
    label: 'Indigo',
    value: '#610F7F',
  },
  {
    label: 'Rose Red',
    value: '#B9314F',
  },
  {
    label: 'Sunglow',
    value: '#FCCA46',
  },
  {
    label: 'Pumpkin',
    value: '#FE7F2D',
  },
];

export const DEFAULT_SIZE = 2;

export const SIZES: number[] = [DEFAULT_SIZE, 4, 6, 8, 10];

export const DEFAULT_MODE = DrawConfigurationMode.Draw;

export const MODES: DrawConfigurationMode[] = [
  DEFAULT_MODE,
  DrawConfigurationMode.Erase,
];

export const ERASE_COLOR = '#fff';
