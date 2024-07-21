import { MODES } from '../../common/constants.ts';
import { DrawConfigurationMode } from '../../common/enums.ts';
import { useDrawConfigurationStore } from '../../store/useDrawConfiguration.ts';

import clsx from 'clsx';
import { BrushIcon, EraserIcon } from 'lucide-react';

const FloatControlsMode = () => {
  const currentMode = useDrawConfigurationStore((state) => state.currentMode);
  const updateCurrentMode = useDrawConfigurationStore(
    (state) => state.updateCurrentMode
  );

  const renderIcon = (mode: DrawConfigurationMode) => {
    switch (mode) {
      case DrawConfigurationMode.Draw:
        return <BrushIcon />;
      case DrawConfigurationMode.Erase:
        return <EraserIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {MODES.map((mode) => (
        <div key={mode} className="group">
          <div
            className={`h-6 w-6 cursor-pointer`}
            onClick={() => updateCurrentMode(mode)}
          >
            {renderIcon(mode)}
          </div>

          <div
            className={clsx(
              'mt-0.5 h-1 w-full rounded-sm bg-slate-800 opacity-0 transition-opacity group-hover:opacity-100',
              { ['opacity-100']: mode === currentMode }
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatControlsMode;
