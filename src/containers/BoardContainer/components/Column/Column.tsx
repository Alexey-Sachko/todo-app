import React, { useRef, useState, MutableRefObject, useEffect } from "react";
import styles from "./Column.module.css";

type ColumnProps = {
  name: string;
  onActive: () => void;
  onDisActive: () => void;
  // onChangedName: () => void;
};

const Column = ({ name, onActive, onDisActive }: ColumnProps) => {
  const [isActive, setIsActive] = useState(false);

  const $draggable = useRef<HTMLDivElement>(null);
  const $container = useRef<HTMLDivElement>(null);
  const $handlerMouseUpFunc = useRef<(e: MouseEvent) => void>();
  const $handlerMouseMoveFunc = useRef<(e: MouseEvent) => void>();

  const unsubscribeUp = () => {
    if ($handlerMouseUpFunc.current) {
      console.log("remove event listener");
      document.removeEventListener("mouseup", $handlerMouseUpFunc.current);
    }
  };

  const unsubscribeMove = () => {
    if ($handlerMouseMoveFunc.current) {
      console.log("remove event listener");
      document.removeEventListener("mousemove", $handlerMouseMoveFunc.current);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsActive(true);
    onActive();

    const handlerUp = (e: MouseEvent) => {
      setIsActive(false);
      onDisActive();
      unsubscribeUp();
      unsubscribeMove();
    };

    const handlerMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dragEl = $draggable.current;

      console.log("handle move");

      if (e.buttons === 1 && dragEl) {
        dragEl.style.position = "fixed";
        setCoord(dragEl, clientX, clientY);
      }
    };

    document.addEventListener("mouseup", handlerUp);
    document.addEventListener("mousemove", handlerMove);

    $handlerMouseUpFunc.current = handlerUp;
    $handlerMouseMoveFunc.current = handlerMove;
  };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const { clientX, clientY } = e;
  //   const dragEl = $draggable.current;
  //   if (e.buttons === 1 && dragEl) {
  //     dragEl.style.position = "fixed";
  //     dragEl.style.top = `${clientY + 100}px`;
  //     dragEl.style.left = `${clientX + 100}px`;
  //   }
  // };

  useEffect(
    () => () => {
      unsubscribeUp();
      unsubscribeMove();
    },
    []
  );

  return (
    <div ref={$container} className={styles.container}>
      <div
        ref={$draggable}
        className={styles.draggable}
        onMouseDown={handleMouseDown}
        style={{ position: isActive ? "fixed" : "static" }}
      >
        {name} {isActive && "isActive"}
      </div>
    </div>
  );
};

export default Column;

function setCoord(el: HTMLElement, x: number, y: number) {
  el.style.top = `${y - 100}px`;
  el.style.left = `${x - 100}px`;
}
