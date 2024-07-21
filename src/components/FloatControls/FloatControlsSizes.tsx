import { SIZES } from '../../common/constants.ts';
import { useDrawConfigurationStore } from '../../store/useDrawConfiguration.ts';

import clsx from 'clsx';

const FloatControlsSizes = () => {
  const currentColor = useDrawConfigurationStore((state) => state.currentColor);
  const currentSize = useDrawConfigurationStore((state) => state.currentSize);

  const updateCurrentSize = useDrawConfigurationStore(
    (state) => state.updateCurrentSize
  );

  return (
    <div className="flex items-center gap-1">
      {SIZES.map((size) => (
        <div
          key={size}
          className="cursor-pointer"
          onClick={() => updateCurrentSize(size)}
        >
          <div className="mb-1 flex h-6 w-6 items-center justify-center">
            <div
              className="rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: currentColor,
              }}
            />
          </div>

          <div
            className={clsx(
              'mt-0.5 h-1 w-full rounded-sm bg-slate-800 opacity-0 transition-opacity group-hover:opacity-100',
              { ['opacity-100']: currentSize === size }
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatControlsSizes;
