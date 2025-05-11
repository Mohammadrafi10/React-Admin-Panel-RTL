import React from "react";
import ReactApexChart from "react-apexcharts";

function LineChart() {
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      background: "transparent",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    theme: {
      mode: "dark",
    },
    stroke: {
      curve: "smooth",
      width: [3, 3, 3],
      lineCap: "round",
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.1)",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "rgba(255, 255, 255, 0.7)",
          fontSize: "12px",
        },
        rotate: -45,
        rotateAlways: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "rgba(255, 255, 255, 0.7)",
          fontSize: "12px",
        },
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "MMM",
      },
      y: {
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
    },
    colors: ["#4B1E85", "#10B981", "#F59E0B"],
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "rgba(255, 255, 255, 0.7)",
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        radius: 12,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
          legend: {
            position: "bottom",
            offsetY: 0,
          },
          xaxis: {
            labels: {
              rotate: -45,
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
          },
          legend: {
            position: "bottom",
            offsetY: 0,
          },
          xaxis: {
            labels: {
              rotate: -45,
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Revenue",
      data: [31000, 40000, 35000, 50000, 49000, 60000, 70000],
    },
    {
      name: "Cost",
      data: [20000, 25000, 22000, 30000, 28000, 35000, 40000],
    },
    {
      name: "Profit",
      data: [11000, 15000, 13000, 20000, 21000, 25000, 30000],
    },
  ];

  return (
    <div className="w-full h-[400px] md:h-[350px] sm:h-[300px] p-4">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="100%"
      />
    </div>
  );
}

export default LineChart;
