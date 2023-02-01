import { forwardRef } from "react";
import styles from "./Textfield.module.css";

type TextfieldProps = {
  placeHolder: string;
  name: string;
  onInput: (task: string) => void;
  value?: string;
};

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ placeHolder, name, onInput, value }, ref) => {
    return (
      <div className={styles.inputcontainer}>
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
);

export default Textfield;
