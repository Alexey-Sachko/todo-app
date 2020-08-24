import React from "react";
import clsx from "clsx";
import style from "./Button.module.css";

type ButtonVariant = "default" | "outlined" | "contained";
type Color = "default" | "primary" | "secondary";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: Color;
};

const Button = (props: ButtonProps) => {
  const {
    className,
    variant = "default",
    color = "default",
    ...spread
  } = props;
  const isDefaultPrimary = color === "primary" && variant === "default";

  const resultClassName = clsx([style.button, className], {
    [style["button-primary"]]: isDefaultPrimary,
  });

  return <button className={resultClassName} {...spread} />;
};

export default Button;
