import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const series = [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Revenue",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    colors: ["#4B1E85", "#9333EA"],
    grid: {
      borderColor: "rgba(75,30,133,0.2)",
      strokeDashArray: 4,
    },
  };

  return (
    <div className="w-full h-[350px]">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
      />
    </div>
  );
};

export default AreaChart;
