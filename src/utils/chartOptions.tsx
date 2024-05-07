export const getChartOptions = (xTitle: string, yTitle: string) => {
  return {
    scales: {
      x: {
        title: {
          display: true,
          text: xTitle,
        },
      },
      y: {
        title: {
          display: true,
          text: yTitle,
        },
      },
    },
  };
};
