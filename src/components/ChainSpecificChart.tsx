import { ChartData, ChainState } from "@/utils/types";
import { Line, Bar } from "react-chartjs-2";
import { prepareChartData } from "@/utils/helper";
import { getChartOptions } from "@/utils/chartOptions";

type ChainSpecificChartProps = {
  data: ChartData;
  chainState: ChainState;
};
const ChainSpecificChart: React.FC<ChainSpecificChartProps> = ({
  data,
  chainState,
}) => {
  return chainState.graphType === "line" ? (
    <Line
      options={getChartOptions("Date", "Restarts")}
      data={prepareChartData(data, chainState.chain, false)}
    />
  ) : (
    <Bar
      options={getChartOptions("Date", "Restarts")}
      data={prepareChartData(data, chainState.chain, false)}
    />
  );
};

export default ChainSpecificChart;
