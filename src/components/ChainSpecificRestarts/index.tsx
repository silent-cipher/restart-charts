"use client";
import { useFilterState } from "@/hooks/useFilterState";
import { Filters, ChainChart } from "./components";
import SectionWrapper from "@/reusables/SectionWrapper";
import ChartWrapper from "@/reusables/ChartWrapper";
import { prepareMonthData } from "@/utils/helper";
import { ChartData } from "@/utils/types";

interface ChainSpecificRestartsProps {
  data: ChartData;
}

const ChainSpecificRestarts: React.FC<ChainSpecificRestartsProps> = ({
  data,
}) => {
  const { chainData, chainState, setChainState } = useFilterState(data);
  return (
    <SectionWrapper title="Chain Specific Restarts">
      <Filters
        monthData={prepareMonthData(data)}
        setChainState={setChainState}
        chainState={chainState}
      />
      <ChartWrapper>
        <ChainChart data={chainData} chainState={chainState} />
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default ChainSpecificRestarts;
