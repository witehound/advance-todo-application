import { forwardRef, memo } from "react";
import styles from "./Textfield.module.css";

type TextfieldProps = {
  placeHolder?: string;
  name: string;
  onInput: (task: string) => void;
  value?: string;
  label?: string;
};

const Textfield = memo(
  forwardRef<HTMLInputElement, TextfieldProps>(
    ({ placeHolder, name, onInput, value, label }, ref) => {
      return (
        <div className={styles.inputcontainer}>
          {label ? <label htmlFor={name}>{label}</label> : null}
          <input
            ref={ref}
            type="text"
            placeholder={placeHolder}
            name={name}
            className={styles.input}
            onChange={(e: any) => onInput(e.target.value)}
            value={value}
          />
        </div>
      );
    }
  )
);

export default Textfield;
