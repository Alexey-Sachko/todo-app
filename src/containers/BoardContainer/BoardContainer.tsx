import React from "react";
import styles from "./BoardContainer.module.css";
import Column from "./components/Column";

import { columns } from "./dummy-data";

const BoardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Доска</div>
      <div className={styles.columnsContainer}>
        {columns.map((col) => (
          <Column name={col.name} key={col.id} />
        ))}
      </div>
    </div>
  );
};

export default BoardContainer;
