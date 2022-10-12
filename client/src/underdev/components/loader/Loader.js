import React from "react";
import styles from "./loader.module.scss";

export const BigLoader = () => {
  return (
    <div>
      <div className={styles.circular_progress2}></div>
    </div>
  );
};

export default function Loader() {
  return (
    <div>
      <div className={styles.circular_progress}></div>
    </div>
  );
}
