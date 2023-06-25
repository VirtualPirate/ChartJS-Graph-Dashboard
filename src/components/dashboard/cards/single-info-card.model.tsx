export const plusGraphColor = {
  backgroundColor: "#f0fdf4",
  borderColor: "#22c55e",
};

export const minusGraphColor = {
  backgroundColor: "#fef2f2",
  borderColor: "#ef4444",
};

export const chartOptions = {
  beizerCurve: true,
  scales: {
    x: {
      display: false,
      grid: {
        display: false, // Disable x-axis gridlines
      },
    },
    y: {
      display: false,
      grid: {
        display: false, // Disable y-axis gridlines
      },
    },
  },

  plugins: {
    legend: {
      display: false, // Disable the entire legend
    },
  },

  elements: {
    point: {
      radius: 0, // Set the radius to 0 to hide the dots
    },
  },
};
