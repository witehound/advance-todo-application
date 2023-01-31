import { ReactNode, useEffect, useState } from "react";
import styles from "./Button.module.css";

type ButtonProp = {
  children: ReactNode;
  style: string;
  onClick: (e: any) => void;
};

const Button = ({ children, style, onClick }: ButtonProp) => {
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
      onClick={(e) => onClick(e)}
      className={`${styles.button} ${st}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
