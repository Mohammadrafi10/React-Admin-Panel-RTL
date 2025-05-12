import React, { memo, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import ChartWrapper from "../ChartWrapper";

const AreaChart = memo(() => {
  const series = useMemo(
    () => [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    []
  );

  const options = useMemo(
    () => ({
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        background: "transparent",
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          },
        },
        parentHeightOffset: 0,
        redrawOnWindowResize: false,
        redrawOnParentResize: false,
        selection: {
          enabled: false,
        },
        brush: {
          enabled: false,
        },
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
            colors: "#fff",
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
          show: false,
        },
        enabled: true,
        shared: true,
        intersect: false,
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
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300,
            },
            legend: {
              position: "bottom",
              offsetY: 0,
            },
          },
        },
      ],
    }),
    []
  );

  return (
    <ChartWrapper>
      <div className="w-full h-[350px]">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="100%"
        />
      </div>
    </ChartWrapper>
  );
});

AreaChart.displayName = "AreaChart";

export default AreaChart;
