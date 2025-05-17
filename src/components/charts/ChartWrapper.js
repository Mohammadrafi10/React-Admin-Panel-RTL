import React from "react";
import useTouchEvents from "../../hooks/useTouchEvents";

const ChartWrapper = ({ children, className = "" }) => {
  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    useTouchEvents();

  return (
    <div
      className={`relative ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default ChartWrapper;
