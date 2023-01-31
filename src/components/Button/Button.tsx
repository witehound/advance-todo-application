import { ReactNode } from "react";
import "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProp = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProp) => {
  return <button>{children}</button>;
};

export default Button;
