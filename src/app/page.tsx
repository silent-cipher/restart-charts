import styles from "@/styles/page.module.css";
import MonthlyRestarts from "@/components/MonthlyRestarts";
import ChainSpecificRestarts from "@/components/ChainSpecificRestarts";
import { getChartData } from "@/utils/getChartData";

export default async function Home() {
  const data = await getChartData();
  return (
    <main className={styles.main}>
      <div className={styles["main-container"]}>
        <h1>Restart Data</h1>
        <MonthlyRestarts data={data} />
        <ChainSpecificRestarts data={data} />
      </div>
    </main>
  );
}
