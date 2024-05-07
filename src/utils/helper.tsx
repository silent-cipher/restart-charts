import { ChartData } from "@/hooks/useChartData";

export const prepareChartData = (
  data: ChartData,
  chain: string,
  isMonth: boolean
) => {
  if (isMonth) data = prepareMonthData(data);
  return {
    labels: Object.keys(data.data[chain]),
    datasets: Object.keys(data.data).map((key, index) => ({
      label: key,
      data: Object.values(data.data[key]),
      borderColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
    })),
  };
};

export const prepareChainSpecificChartData = (
  data: { [key: string]: number },
  chain: string
) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        label: chain,
        data: Object.values(data),
        borderColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
      },
    ],
  };
};

export const prepareMonthData = (data: ChartData) => {
  const monthlyData = {} as ChartData["data"];

  for (const chain in data.data) {
    monthlyData[chain] = {};

    for (const date in data.data[chain]) {
      const yearMonth = date.slice(0, 7); // Extract year and month from date string

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
      console.log(date);
      oneMonthData[date] = data.data[chain][date];
    }
  }
  console.log(oneMonthData);
  return oneMonthData;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
