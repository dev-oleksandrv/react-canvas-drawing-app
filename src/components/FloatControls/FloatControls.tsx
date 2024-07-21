import FloatControlsColors from './FloatControlsColors.tsx';
import FloatControlsMode from './FloatControlsMode.tsx';
import FloatControlsSizes from './FloatControlsSizes.tsx';

const Divider = () => (
  <div className="my-2 h-1 w-[26px] rounded-full bg-gray-300 md:mx-2 md:h-[26px] md:w-1" />
);

const FloatControls = () => {
  return (
    <div className="border-divider absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center rounded-md border p-2 pb-1 shadow-sm md:flex-row">
      <FloatControlsMode />

      <Divider />

      <FloatControlsColors />

      <Divider />

      <FloatControlsSizes />
    </div>
  );
};

export default FloatControls;
