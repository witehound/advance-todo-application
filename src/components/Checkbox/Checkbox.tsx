import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  name: string;
  value?: boolean;
  label?: string;
};

const CheckBox = ({ name, label }: CheckBoxProps) => {
  return (
    <div className={styles.container}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input type="checkbox" name={name} className={styles.checkbox} />
    </div>
  );
};

export default CheckBox;
