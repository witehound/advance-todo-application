import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  name: string;
  value?: any;
};

const CheckBox = ({ name }: CheckBoxProps) => {
  return (
    <div>
      <input type="checkbox" name={name} className={styles.checkbox} />
    </div>
  );
};

export default CheckBox;
