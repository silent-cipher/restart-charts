"use client";
import styles from "@/styles/Page.module.css";
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
import { prepareChartData, prepareMonthData } from "@/utils/helper";
import ChainSpecificChart from "@/components/ChainSpecificChart";
import { getChartOptions } from "@/utils/chartOptions";
import { Loading } from "@/components/Loading";
import { useFilterState } from "@/hooks/useFilterState";

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
  const { chainState, setChainState, chainData } = useFilterState(data);

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
              <ChainSpecificChart data={chainData} chainState={chainState} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
