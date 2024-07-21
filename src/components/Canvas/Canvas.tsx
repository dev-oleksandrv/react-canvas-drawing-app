import { MouseEvent, memo, useCallback, useRef } from 'react';

import { ERASE_COLOR } from '../../common/constants.ts';
import { DrawConfigurationMode } from '../../common/enums.ts';
import useWindowResizeListener from '../../hooks/useWindowResizeListener.ts';
import { useDrawConfigurationStore } from '../../store/useDrawConfiguration.ts';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const progressRef = useRef(false);
  const pauseRef = useRef(false);

  useWindowResizeListener(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = canvasRef.current.parentElement!.clientWidth;
    canvasRef.current.height = canvasRef.current.parentElement!.clientHeight;
  });

  const handleDrawStart = useCallback((event: MouseEvent) => {
    if (!canvasRef.current) return;

    if (!contextRef.current)
      contextRef.current = canvasRef.current.getContext('2d');

    const configuration = useDrawConfigurationStore.getState();

    contextRef.current!.lineWidth = configuration.currentSize;
    contextRef.current!.strokeStyle =
      configuration.currentMode === DrawConfigurationMode.Erase
        ? ERASE_COLOR
        : configuration.currentColor;
    contextRef.current!.lineCap = 'round';

    progressRef.current = true;

    contextRef.current?.beginPath();

    contextRef.current?.moveTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
  }, []);

  const handleDrawProgress = useCallback((event: MouseEvent) => {
    if (progressRef.current && contextRef.current) {
      contextRef.current.lineTo(
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY
      );
      contextRef.current.stroke();
    }
  }, []);

  const handleDrawStop = useCallback(() => {
    if (progressRef.current && contextRef.current) {
      progressRef.current = false;

      contextRef.current.closePath();
    }
  }, []);

  const handleDrawPause = useCallback(() => {
    pauseRef.current = true;
  }, []);

  const handleDrawResume = useCallback(() => {
    pauseRef.current = false;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      onMouseDown={handleDrawStart}
      onMouseMove={handleDrawProgress}
      onMouseUp={handleDrawStop}
      onMouseOut={handleDrawPause}
      onMouseEnter={handleDrawResume}
      className="cursor-crosshair"
    >
      Your browser doesn't support Canvas.
    </canvas>
  );
};

export default memo(Canvas);
