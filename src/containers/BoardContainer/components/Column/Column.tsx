import React from "react";
import styles from "./Column.module.css";

type ColumnProps = {
  name: string;
  // onChangedName: () => void;
};

const Column = ({ name }: ColumnProps) => {
  return <div className={styles.container}>{name}</div>;
};

export default Column;
