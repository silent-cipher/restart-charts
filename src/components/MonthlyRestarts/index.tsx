import SectionWrapper from "@/reusables/SectionWrapper";
import ChartWrapper from "@/reusables/ChartWrapper";
import LineChart from "./components";
import { ChartData } from "@/utils/types";

interface MonthlyRestartsProps {
  data: ChartData;
}

const MonthlyRestarts: React.FC<MonthlyRestartsProps> = ({ data }) => {
  return (
    <SectionWrapper title="Monthly Restarts (All Chains)">
      <ChartWrapper>
        <LineChart data={data} />
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default MonthlyRestarts;
