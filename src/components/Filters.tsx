import styles from "@/styles/Filters.module.css";
import { ChartData } from "@/hooks/useChartData";
import { ChainState } from "@/app/page";
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
  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter}>
        <label htmlFor={"chain"}>Chain: </label>
        <select
          id={"chain"}
          value={chainState.chain}
          onChange={(e) =>
            setChainState({ ...chainState, chain: e.target.value })
          }
        >
          {Object.keys(data.data).map((chain) => (
            <option key={chain} value={chain}>
              {chain}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor={"month"}>Month: </label>
        <select
          id={"month"}
          value={chainState.month}
          onChange={(e) =>
            setChainState({ ...chainState, month: e.target.value })
          }
        >
          <option value={"all"}>All</option>
          {Object.keys(data.data[chainState.chain]).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor={"graphType"}>Graph Type: </label>
        <select
          id={"graphType"}
          value={chainState.graphType}
          onChange={(e) =>
            setChainState({ ...chainState, graphType: e.target.value })
          }
        >
          <option value={"line"}>Line</option>
          <option value={"bar"}>Bar</option>
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor={"cummulative"}>Cummulative</label>
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
