import { memo } from "react";
import styles from "./TextAreaFeild.module.css";

type TextAreaFeildProps = {
  value: string;
  name?: string;
  label?: string;
  onInput: (value: string) => void;
};

const TextAreaFeild = memo(
  ({ value, label, name, onInput }: TextAreaFeildProps) => {
    return (
      <div>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <textarea
          className={styles.textAreaField}
          defaultValue={value}
          name={name}
          onChange={(e) => onInput(e.target.value)}
        />
        ;
      </div>
    );
  }
);

export default TextAreaFeild;
