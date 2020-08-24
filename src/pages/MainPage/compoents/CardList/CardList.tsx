import React from "react";
import styles from "./CardList.module.css";
import { ICard } from "../../../../types/card.type";
import Card from "../Card/Card";

type CardListProps = {
  list: ICard[];
};

const CardList = ({ list }: CardListProps) => {
  return (
    <div className={styles.container}>
      {list.map(({ title }, idx) => (
        <Card key={idx} title={title} />
      ))}
    </div>
  );
};

export default CardList;
