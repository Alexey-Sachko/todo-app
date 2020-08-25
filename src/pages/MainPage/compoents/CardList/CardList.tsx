import React, { RefObject } from "react";
import styles from "./CardList.module.css";
import { ICard } from "../../../../types/card.type";
import Card from "../Card/Card";

type CardListProps = {
  list: ICard[];
  listRef: RefObject<HTMLElement>;
  onCardDrop?: (cardId: number, x: number, y: number) => void;
};

const CardList = ({ list, onCardDrop, listRef }: CardListProps) => {
  return (
    // @ts-ignore
    <div ref={listRef} className={styles.container}>
      {list.map(({ title, id }, idx) => (
        <Card
          key={idx}
          title={title}
          onDrop={(x, y) => onCardDrop && onCardDrop(id, x, y)}
        />
      ))}
    </div>
  );
};

export default CardList;
