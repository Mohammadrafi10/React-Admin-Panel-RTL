import React from "react";
import ReactApexChart from "react-apexcharts";

const FunnelChart = () => {
  const series = [
    {
      name: "Conversion Rate",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#4B1E85",
      "#5B2B9E",
      "#6B38B7",
      "#7B45D0",
      "#8B52E9",
      "#9B5FF2",
      "#AB6CFB",
      "#BB79FF",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      categories: [
        "Website Visit",
        "Downloads",
        "Sign Up",
        "Add to Cart",
        "Checkout",
        "Payment",
        "Confirmation",
        "Purchase",
      ],
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
        type="bar"
        height="100%"
      />
    </div>
  );
};

export default FunnelChart;
