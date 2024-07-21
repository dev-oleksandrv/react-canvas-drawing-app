import { COLORS } from '../../common/constants.ts';
import { DrawConfigurationMode } from '../../common/enums.ts';
import { useDrawConfigurationStore } from '../../store/useDrawConfiguration.ts';

import clsx from 'clsx';

const FloatControlsColors = () => {
  const currentMode = useDrawConfigurationStore((state) => state.currentMode);

  const currentColor = useDrawConfigurationStore((state) => state.currentColor);
  const updateCurrentColor = useDrawConfigurationStore(
    (state) => state.updateCurrentColor
  );

  const isEraseEnabled = currentMode === DrawConfigurationMode.Erase;

  return (
    <div
      className={clsx('flex items-center gap-1', {
        'pointer-events-none opacity-40': isEraseEnabled,
      })}
    >
      {COLORS.map((color) => (
        <div key={color.value} className="group">
          <div
            style={{ backgroundColor: color.value }}
            className={`h-6 w-6 cursor-pointer rounded-md data-[active=true]:shadow-xl`}
            title={color.label}
            data-active={color.value === currentColor}
            onClick={() => updateCurrentColor(color.value)}
          />

          <div
            className={clsx(
              'mt-0.5 h-1 w-full rounded-sm bg-slate-800 opacity-0 transition-opacity group-hover:opacity-100',
              { ['opacity-100']: color.value === currentColor }
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatControlsColors;
