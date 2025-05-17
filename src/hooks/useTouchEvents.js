import { useState, useCallback } from "react";

const useTouchEvents = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Handle left swipe
      console.log("Left swipe detected");
    }
    if (isRightSwipe) {
      // Handle right swipe
      console.log("Right swipe detected");
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useTouchEvents;
