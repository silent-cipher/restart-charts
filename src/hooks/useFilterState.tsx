"use client";
import { ChartData } from "@/utils/types";
import { useState, useEffect } from "react";
import { prepareOneMonthData } from "@/utils/helper";

export const useFilterState = (data: ChartData | undefined) => {
  const [chainState, setChainState] = useState({
    chain: "ethereum",
    month: "all",
    graphType: "line",
    cummulative: false,
  });

  const { chain, month, cummulative } = chainState;

  let chainData = data
    ? JSON.parse(JSON.stringify(data?.data[chain]))
    : undefined;

  if (month !== "all" && data) {
    const yearMonth = month.slice(0, 7);
    chainData = prepareOneMonthData(data, yearMonth, chainState.chain);
  }

  if (cummulative) {
    let cumulativeValue = 0;
    for (const date in chainData) {
      cumulativeValue += chainData[date];
      chainData[date] = cumulativeValue;
    }
  }

  useEffect(() => {
    chainData = data?.data[chain as keyof ChartData];
  }, [data]);

  return {
    chainState,
    setChainState,
    chainData: chainData
      ? {
          data: {
            [chain]: chainData as ChartData["data"][keyof ChartData["data"]],
          },
        }
      : undefined,
  };
};
