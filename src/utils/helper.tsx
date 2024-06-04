import { ChartData, ChainState } from "@/utils/types";

export const prepareChartData = (
  chartData: ChartData,
  chain: string,
  isMonth: boolean
) => {
  let data = isMonth ? prepareMonthData(chartData) : chartData;
  return {
    labels: Object.keys(data.data[chain]),
    datasets: Object.keys(data.data).map((key, index) => ({
      label: key,
      data: Object.values(data.data[key]),
      borderColor: `rgb(${Math.floor(Math.random() * 200 + 55)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
      backgroundColor: `rgba(${Math.floor(
        Math.random() * 200 + 55
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 200 + 55
      )}, 0.5)`,
    })),
  };
};

export const prepareMonthData = (data: ChartData) => {
  const monthlyData = {} as ChartData["data"];

  for (const chain in data.data) {
    monthlyData[chain] = {};

    for (const date in data.data[chain]) {
      const yearMonth = date.slice(0, 7);

      if (monthlyData[chain][yearMonth]) {
        monthlyData[chain][yearMonth] += data.data[chain][date];
      } else {
        monthlyData[chain][yearMonth] = data.data[chain][date];
      }
    }
  }
  return { data: monthlyData };
};

export const prepareOneMonthData = (
  data: ChartData,
  month: string,
  chain: string
) => {
  const oneMonthData: { [key: string]: number } = {};

  for (const date in data.data[chain]) {
    if (date.slice(0, 7) === month) {
      oneMonthData[date] = data.data[chain][date];
    }
  }
  console.log(oneMonthData);
  return oneMonthData;
};

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
