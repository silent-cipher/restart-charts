import classes from "@/styles/Loading.module.css";
export const Loading = () => {
  return (
    <div className={classes["loader-wrapper"]}>
      <div className={classes.loader}>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__ball"]}></div>
      </div>
    </div>
  );
};
