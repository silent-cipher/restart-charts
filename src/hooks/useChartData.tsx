"use client";
import { useState, useEffect } from "react";
import { ChartData } from "@/utils/types";

export const useChartData = () => {
  const [data, setData] = useState<ChartData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_CHART_DATA_URL as string
        );
        const chartData = await response.json();
        setData(chartData as ChartData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return { loading, data };
};
