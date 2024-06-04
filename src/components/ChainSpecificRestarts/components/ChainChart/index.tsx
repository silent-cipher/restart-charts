import { Line, Bar } from "react-chartjs-2";
import Loading from "@/reusables/Loading";
import { prepareChartData, getChartOptions } from "@/utils/helper";
import { ChainState, ChartData } from "@/utils/types";

type ChainChartProps = {
  data: ChartData | undefined;
  chainState: ChainState;
};

const ChainChart: React.FC<ChainChartProps> = ({ data, chainState }) => {
  const { chain, graphType } = chainState;

  if (!data) return <Loading />;
  return graphType === "line" ? (
    <Line
      options={getChartOptions("Date", "Restarts")}
      data={prepareChartData(data, chain, false)}
    />
  ) : (
    <Bar
      options={getChartOptions("Date", "Restarts")}
      data={prepareChartData(data, chain, false)}
    />
  );
};

export default ChainChart;
