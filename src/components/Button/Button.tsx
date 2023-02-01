import { ReactNode, useEffect, useState } from "react";
import styles from "./Button.module.css";

type ButtonProp = {
  children: ReactNode;
  style: string;
  type?: "button" | "submit";
  handleOnClick?: () => void;
};

const Button = ({
  children,
  style,
  type = "button",
  handleOnClick,
}: ButtonProp) => {
  const [st, setSt] = useState<string>("");

  const allStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    disabled: styles.disabled,
    transparent: styles.transparent,
  };

  const matchStyle = (style: string) => {
    const [match] = Object.entries(allStyles).filter(([k, v]) => k === style);
    setSt(match[1]);
  };

  useEffect(() => {
    if (style) matchStyle(style);
  }, []);

  return (
    <button
      className={`${styles.button} ${st}`}
      type={type}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
