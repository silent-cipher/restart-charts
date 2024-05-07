"use client";
import styles from "@/styles/Page.module.css";
import { ChartData } from "@/utils/types";
import { useEffect, useState } from "react";
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
import { useChartData } from "@/hooks/useChartData";
import { Line } from "react-chartjs-2";
import Filters from "@/components/Filters";
import {
  prepareChartData,
  prepareMonthData,
  prepareOneMonthData,
} from "@/utils/helper";
import ChainSpecificChart from "@/components/ChainSpecificChart";
import { getChartOptions } from "@/utils/chartOptions";
import { Loading } from "@/components/Loading";

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

export default function Home() {
  const { loading, data } = useChartData();
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
  return (
    <main className={styles.main}>
      <div className={styles["main-container"]}>
        <h1>Restart Data</h1>
        <section className={styles["chart-section"]}>
          <h2>Monthly Restarts (All Chains)</h2>
          <div className={styles["chart-container"]}>
            {!data || loading ? (
              <Loading />
            ) : (
              <Line
                options={getChartOptions("Month", "Restarts")}
                data={prepareChartData(data, "ethereum", true)}
              />
            )}
          </div>
        </section>
        <section className={styles["chart-section"]}>
          <h2>Chain Specific Restarts</h2>
          {data && (
            <Filters
              data={prepareMonthData(data)}
              chainState={chainState}
              setChainState={setChainState}
            />
          )}

          <div className={styles["chart-container"]}>
            {loading || !chainData ? (
              <Loading />
            ) : (
              <ChainSpecificChart
                data={{
                  data: {
                    [chain]: chainData,
                  },
                }}
                chainState={chainState}
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
