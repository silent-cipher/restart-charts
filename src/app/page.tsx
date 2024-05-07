"use client";
import styles from "@/styles/Page.module.css";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, useChartData } from "@/hooks/useChartData";
import { Line } from "react-chartjs-2";
import Filters from "@/components/Filters";
import {
  prepareChartData,
  prepareMonthData,
  prepareOneMonthData,
} from "@/utils/helper";
import ChainSpecificChart from "@/components/ChainSpecificChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export type ChainState = {
  chain: string;
  month: string;
  graphType: string;
  cummulative: boolean;
};
export default function Home() {
  const { loading, data } = useChartData();
  const [chainState, setChainState] = useState({
    chain: "ethereum",
    month: "all",
    graphType: "line",
    cummulative: false,
  });

  const { chain, month, cummulative } = chainState;

  let chainData = data.data[chain as keyof ChartData];

  if (month !== "all") {
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

  return (
    <main className={styles.main}>
      <div className={styles["main-container"]}>
        <h1>Restart Data</h1>
        {loading || data === undefined ? (
          <p>Loading...</p>
        ) : (
          <>
            <section className={styles["chart-section"]}>
              <h2>Monthly Restarts (All Chains)</h2>
              <div className={styles["chart-container"]}>
                <Line data={prepareChartData(data, "ethereum", true)} />
              </div>
            </section>
            <section className={styles["chart-section"]}>
              <h2>Chain Specific Restarts</h2>
              <Filters
                data={prepareMonthData(data)}
                chainState={chainState}
                setChainState={setChainState}
              />
              <div className={styles["chart-container"]}>
                <ChainSpecificChart
                  data={{
                    data: {
                      [chain]: chainData,
                    },
                  }}
                  chainState={chainState}
                />
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
