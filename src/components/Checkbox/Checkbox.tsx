import styles from "./Checkbox.module.css";

type InputsProps = {
  placeHolder: string;
  name: string;
  value?: any;
};

const Inputs = ({ placeHolder, name }: InputsProps) => {
  return (
    <div>
      <input
        type="checkbox"
        placeholder={placeHolder}
        name={name}
        className={styles.checkbox}
      />
    </div>
  );
};

export default Inputs;
