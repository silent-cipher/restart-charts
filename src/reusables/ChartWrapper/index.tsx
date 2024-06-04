import styles from "./index.module.css";

interface ChartWrapperProps {
  children: React.ReactNode;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ children }) => {
  return <div className={styles["chart-container"]}>{children}</div>;
};

export default ChartWrapper;
