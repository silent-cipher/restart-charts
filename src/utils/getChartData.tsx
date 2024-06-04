export const getChartData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_CHART_DATA_URL as string);
  if (!res.ok) {
    return {
      data: {
        ethereum: [],
      },
    };
  }
  const data = await res.json();
  return data;
};
