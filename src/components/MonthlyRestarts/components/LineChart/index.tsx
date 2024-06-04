"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { prepareChartData, getChartOptions } from "@/utils/helper";
import { ChartData } from "@/utils/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

type LineChartProps = {
  data: ChartData;
};

export default function LineChart({ data }: LineChartProps) {
  return (
    <Line
      options={getChartOptions("Month", "Restarts")}
      data={prepareChartData(data, "ethereum", true)}
    />
  );
}
