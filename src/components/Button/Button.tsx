import React from "react";
import style from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, ...spread } = props;

  const resultClassName = [style.button, className].filter(Boolean).join(" ");

  return <button className={resultClassName} {...spread} />;
};

export default Button;
