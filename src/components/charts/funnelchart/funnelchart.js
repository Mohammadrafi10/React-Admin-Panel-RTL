import React, { memo, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import ChartWrapper from "../ChartWrapper";

const FunnelChart = memo(() => {
  const series = useMemo(
    () => [
      {
        name: "Conversion Rate",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    []
  );

  const options = useMemo(
    () => ({
      chart: {
        type: "bar",
        height: 350,
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
          fontSize: "12px",
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: false,
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
            dataLabels: {
              style: {
                fontSize: "10px",
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: "10px",
                },
              },
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
          type="bar"
          height="100%"
        />
      </div>
    </ChartWrapper>
  );
});

FunnelChart.displayName = "FunnelChart";

export default FunnelChart;
