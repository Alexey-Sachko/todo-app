import React, { useState, useRef } from "react";
import styles from "./MainPage.module.css";
import CardList from "./compoents/CardList";
import { todo as initialTodo, done as initialDone } from "./dummyData";

const MainPage = () => {
  const [done, setDone] = useState(initialDone);
  const [todo, setTodo] = useState(initialTodo);
  const todoListRef = useRef<HTMLElement>(null);
  const doneListRef = useRef<HTMLElement>(null);

  const moveToTodo = (id: number) => {
    const cardIdx = done.findIndex((el) => el.id === id);
    if (cardIdx > -1) {
      const card = done[cardIdx];
      setDone((prev) => [
        ...prev.slice(0, cardIdx),
        ...prev.slice(cardIdx + 1),
      ]);
      setTodo((prev) => [...prev, card]);
    }
  };

  const moveToDone = (id: number) => {
    const cardIdx = todo.findIndex((el) => el.id === id);
    if (cardIdx > -1) {
      const card = todo[cardIdx];
      setTodo((prev) => [
        ...prev.slice(0, cardIdx),
        ...prev.slice(cardIdx + 1),
      ]);
      setDone((prev) => [...prev, card]);
    }
  };

  const isInside = (elem: HTMLElement, x: number, y: number) => {
    const width = elem.offsetWidth;
    const height = elem.offsetHeight;
    const containsByX = x >= elem.offsetLeft && x <= elem.offsetLeft + width;
    const containsByY = y >= elem.offsetTop && y <= elem.offsetTop + height;
    return containsByX && containsByY;
  };

  const onDropFromTodo = (id: number, x: number, y: number) => {
    const doneEl = doneListRef.current;
    if (doneEl && isInside(doneEl, x, y)) {
      moveToDone(id);
    }
  };

  const onDropFromDone = (id: number, x: number, y: number) => {
    const todoEl = todoListRef.current;
    if (todoEl && isInside(todoEl, x, y)) {
      moveToTodo(id);
    }
  };

  return (
    <div>
      <header className={styles.header}>Drag and Drop Demo</header>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h5 className={styles.colHeader}>TODO</h5>
          <CardList
            list={todo}
            onCardDrop={onDropFromTodo}
            listRef={todoListRef}
          />
        </div>
        <div className={styles.middleSide}></div>
        <div className={styles.rightSide}>
          <h5 className={styles.colHeader}>Completed</h5>
          <CardList
            list={done}
            listRef={doneListRef}
            onCardDrop={onDropFromDone}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
