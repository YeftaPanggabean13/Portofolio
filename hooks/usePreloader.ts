import { useEffect, useState } from 'react';


export const usePreloader = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  const hidePreloader = () => {
    setIsPreloaderVisible(false);
  };

  const showPreloader = (show: boolean) => {
    setIsPreloaderVisible(show);
  };

  return {
    isPreloaderVisible,
    hidePreloader,
    showPreloader,
  };
};


export const usePreloaderComplete = (delayMs: number = 2000) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return { isReady };
};
