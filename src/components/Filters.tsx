import styles from "@/styles/Filters.module.css";
import { ChainState, ChartData } from "@/utils/types";
import FilterWrapper from "./FilterWrapper";
import { capitalizeFirstLetter } from "@/utils/helper";
type FiltersProps = {
  data: ChartData;
  chainState: ChainState;
  setChainState: React.Dispatch<React.SetStateAction<ChainState>>;
};

const Filters: React.FC<FiltersProps> = ({
  data,
  chainState,
  setChainState,
}) => {
  const handleChainStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChainState({ ...chainState, [e.target.id]: e.target.value });
  };
  return (
    <div className={styles["filter-container"]}>
      <FilterWrapper
        title="Chain"
        forValue="chain"
        value={chainState.chain}
        handleChange={handleChainStateChange}
      >
        {Object.keys(data.data).map((chain) => (
          <option key={chain} value={chain}>
            {chain}
          </option>
        ))}
      </FilterWrapper>
      <FilterWrapper
        title="Month"
        forValue="month"
        value={chainState.month}
        handleChange={handleChainStateChange}
      >
        <option value={"all"}>All</option>
        {Object.keys(data.data[chainState.chain]).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </FilterWrapper>

      <FilterWrapper
        title="Graph Type"
        forValue="graphType"
        value={chainState.graphType}
        handleChange={handleChainStateChange}
      >
        <option value={"line"}>Line</option>
        <option value={"bar"}>Bar</option>
      </FilterWrapper>
      <div className={styles.filter}>
        <label htmlFor={"cummulative"}>Cummulative: </label>
        <input
          id={"cummulative"}
          type={"checkbox"}
          onChange={(e) =>
            setChainState({
              ...chainState,
              cummulative: e.target.checked ? true : false,
            })
          }
        />
      </div>
    </div>
  );
};

export default Filters;
