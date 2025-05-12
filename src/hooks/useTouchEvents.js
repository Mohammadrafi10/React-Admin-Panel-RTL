import { useEffect, useRef } from "react";

const useTouchEvents = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const options = {
      passive: true,
      capture: true,
    };

    const preventDefault = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    element.addEventListener("touchstart", preventDefault, options);
    element.addEventListener("touchmove", preventDefault, options);

    return () => {
      element.removeEventListener("touchstart", preventDefault, options);
      element.removeEventListener("touchmove", preventDefault, options);
    };
  }, []);

  return elementRef;
};

export default useTouchEvents;
