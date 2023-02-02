import { memo } from "react";
import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  name: string;
  value: boolean;
  label?: string;
  onInput?: (value: boolean) => void;
};

const CheckBox = memo(({ name, label, value, onInput }: CheckBoxProps) => {
  return (
    <div className={styles.container}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type="checkbox"
        name={name}
        className={styles.checkbox}
        checked={value}
        onChange={(event) => onInput && onInput(event.target.checked)}
      />
    </div>
  );
});

export default CheckBox;
