import React from "react";
import styles from "./Loader.module.scss";
import { ClimbingBoxLoader, FadeLoader } from "react-spinners";

const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <ClimbingBoxLoader
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <ClimbingBoxLoader
          size="10"
          color="grey"
          loading={true}
          speedMultiplier="1"
        />
      </div>
    </div>
  );
};

export default Loader;
