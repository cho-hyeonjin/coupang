import React from "react";
import styles from "./Loader.module.scss";
import { ClipLoader } from "react-spinners";

const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <ClipLoader color="grey" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <ClipLoader color="grey" loading={true} speedMultiplier="1" />
      </div>
    </div>
  );
};

export default Loader;
