import React from "react";
import styles from "./BoardContainer.module.css";
import Column from "./components/Column";
import Droppable from "./components/Droppable";

import { columns } from "./dummy-data";

const BoardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Доска</div>
      <div className={styles.columnsContainer}>
        {columns.map((col) => (
          <Column
            name={col.name}
            key={col.id}
            onActive={() => console.log("ONACTIVE")}
            onDisActive={() => console.log("ONDISACTIVE")}
          />
        ))}
        <Droppable />
      </div>
    </div>
  );
};

export default BoardContainer;
