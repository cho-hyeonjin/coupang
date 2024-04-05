import React from "react";
import styles from "./Loader.module.scss";
import { ClipLoader } from "react-spinners";

interface ILoaderProps {
  basic?: Boolean;
}

const Loader = ({ basic }: ILoaderProps) => {
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
        <ClipLoader color="grey" loading={true} />
      </div>
    </div>
  );
};

export default Loader;
