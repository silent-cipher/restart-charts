import { ChainState } from "@/app/page";
import { ChartData } from "@/hooks/useChartData";
import { Line } from "react-chartjs-2";
import { prepareChartData } from "@/utils/helper";

type ChainSpecificChartProps = {
  data: ChartData;
  chainState: ChainState;
};
const ChainSpecificChart: React.FC<ChainSpecificChartProps> = ({
  data,
  chainState,
}) => {
  return <Line data={prepareChartData(data, chainState.chain, false)} />;
};

export default ChainSpecificChart;
