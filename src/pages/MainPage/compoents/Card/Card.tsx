import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  return <div className={styles.container}>{title}</div>;
};

export default Card;
