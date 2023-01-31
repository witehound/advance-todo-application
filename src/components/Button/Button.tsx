import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProp = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProp) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
