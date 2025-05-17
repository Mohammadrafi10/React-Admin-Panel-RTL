import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartWrapper from "../ChartWrapper";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = memo(() => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
        borderColor: "#4B1E85",
        backgroundColor: "rgba(75, 30, 133, 0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41],
        borderColor: "#9333EA",
        backgroundColor: "rgba(147, 51, 234, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(75, 30, 133, 0.2)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(75, 30, 133, 0.2)",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#fff",
        },
        border: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <ChartWrapper className="w-full h-full">
      <div className="w-full h-[350px]">
        <Line data={data} options={options} />
      </div>
    </ChartWrapper>
  );
});

AreaChart.displayName = "AreaChart";

export default AreaChart;
