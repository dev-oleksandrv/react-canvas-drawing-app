import { useEffect } from 'react';

const useWindowResizeListener = (handler: EventListener) => {
  useEffect(() => {
    handler(new Event('resize'));

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [handler]);
};

export default useWindowResizeListener;
