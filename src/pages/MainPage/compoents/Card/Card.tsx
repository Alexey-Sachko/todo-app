import React, { useRef, useState } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  onDrop?: (x: number, y: number) => void;
};

const Card = ({ title, onDrop }: CardProps) => {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const mouseDownHandler = (e: React.MouseEvent) => {
    setIsActive(true);
    const dragEl = draggableRef.current;
    let xOffset = 0;
    let yOffset = 0;

    if (dragEl) {
      xOffset = e.clientX - dragEl.offsetLeft;
      yOffset = e.clientY - dragEl.offsetTop;
      setCoords(dragEl, e.clientX - xOffset, e.clientY - yOffset);
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      if (dragEl) {
        const { clientX, clientY } = e;
        setCoords(dragEl, clientX - xOffset, clientY - yOffset);
      }
    };

    const mouseUpHandler = (e: MouseEvent) => {
      setIsActive(false);
      onDrop && onDrop(e.clientX, e.clientY);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <div className={styles.shadow}>
      <div
        ref={draggableRef}
        className={styles.container}
        onMouseDown={mouseDownHandler}
        style={{
          position: isActive ? "fixed" : "static",
        }}
      >
        {title} {isActive && "active"}
      </div>
    </div>
  );
};

export default Card;

function setCoords(el: HTMLElement, x: number, y: number) {
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
}
