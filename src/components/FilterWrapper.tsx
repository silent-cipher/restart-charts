import styles from "@/styles/Filters.module.css";

interface FilterWrapperProps {
  title: string;
  forValue: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({
  title,
  forValue,
  value,
  handleChange,
  children,
}) => {
  return (
    <div className={styles.filter}>
      <label htmlFor={forValue}>{title}: </label>
      <select id={forValue} value={value} onChange={handleChange}>
        {children}
      </select>
    </div>
  );
};

export default FilterWrapper;
