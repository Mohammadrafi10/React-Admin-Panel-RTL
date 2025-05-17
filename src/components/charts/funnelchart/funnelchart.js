import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartWrapper from "../ChartWrapper";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FunnelChart = memo(() => {
  const data = {
    labels: [
      "Website Visit",
      "Downloads",
      "Sign Up",
      "Add to Cart",
      "Checkout",
      "Payment",
      "Confirmation",
      "Purchase",
    ],
    datasets: [
      {
        label: "Conversion Rate",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
        backgroundColor: [
          "#4B1E85",
          "#5B2B9E",
          "#6B38B7",
          "#7B45D0",
          "#8B52E9",
          "#9B5FF2",
          "#AB6CFB",
          "#BB79FF",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(75, 30, 133, 0.2)",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
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
    barPercentage: 0.8,
    categoryPercentage: 1,
  };

  return (
    <ChartWrapper className="w-full h-full">
      <div className="w-full h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </ChartWrapper>
  );
});

FunnelChart.displayName = "FunnelChart";

export default FunnelChart;
