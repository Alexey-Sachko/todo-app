import React from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <header className={styles.header}>Drag and Drop Demo</header>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h5 className={styles.colHeader}>TODO</h5>
        </div>
        <div className={styles.middleSide}></div>
        <div className={styles.rightSide}>
          <h5 className={styles.colHeader}>Completed</h5>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
