export const getChartOptions = () => ({
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
  },
  elements: {
    point: {
      radius: 5,
    },
  },
  scales: {
    y: {
      display: true,
      responsive: true,
      ticks: {
        display: true,
        color: "rgba(75,192,192,0.8)",
      },
      grid: {
        display: false,
        drawBorder: false,
        lineWidth: 0,
        color: "rgba(75,192,192,0.2)",
      },
    },
    x: {
      display: true,
      maintainAspectRatio: true,
      responsive: true,
      ticks: {
        display: true,
        color: "rgba(75,192,192,0.8)",
      },
      grid: {
        display: false,
        drawBorder: false,
        lineWidth: 2,
        color: "rgba(75,192,192,0.8)",
      },
    },
  },
});
