import React, { memo, useEffect } from "react";
import useTouchEvents from "../../hooks/useTouchEvents";

const ChartWrapper = memo(({ children }) => {
  const chartRef = useTouchEvents();

  useEffect(() => {
    // Force a repaint to ensure proper rendering
    const chartElement = chartRef.current;
    if (chartElement) {
      chartElement.style.transform = "translateZ(0)";
    }
  }, []);

  return (
    <div
      ref={chartRef}
      className="chart-wrapper"
      style={{
        willChange: "transform",
        touchAction: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
});

ChartWrapper.displayName = "ChartWrapper";

export default ChartWrapper;
