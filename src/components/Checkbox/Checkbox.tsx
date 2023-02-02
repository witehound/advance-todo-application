import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  name: string;
  value?: any;
  label?: string;
};

const CheckBox = ({ name, label, value }: CheckBoxProps) => {
  return (
    <div className={styles.container}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type="checkbox"
        name={name}
        className={styles.checkbox}
        value={value}
      />
    </div>
  );
};

export default CheckBox;
