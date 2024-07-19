import { COLORS } from '../../common/constants.ts';
import { useDrawConfigurationStore } from '../../store/useDrawConfiguration.ts';

const FloatControlsColors = () => {
  const currentColor = useDrawConfigurationStore((state) => state.currentColor);
  const updateCurrentColor = useDrawConfigurationStore(
    (state) => state.updateCurrentColor
  );

  return (
    <div className="flex items-center gap-1">
      {COLORS.map((color) => (
        <div
          key={color.value}
          style={{ backgroundColor: color.value }}
          className={
            'h-6 w-6 cursor-pointer rounded-md transition-all hover:h-8 hover:w-8 data-[active=true]:h-10 data-[active=true]:w-10 data-[active=true]:shadow-xl data-[active=false]:hover:h-8 data-[active=false]:hover:w-8'
          }
          title={color.label}
          data-active={color.value === currentColor}
          onClick={() => updateCurrentColor(color.value)}
        />
      ))}
    </div>
  );
};

export default FloatControlsColors;
