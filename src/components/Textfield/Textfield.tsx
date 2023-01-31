import styles from "./Textfield.module.css";

type TextfieldProps = {
  placeHolder: string;
  name: string;
};

const Textfield = ({ placeHolder, name }: TextfieldProps) => {
  return (
    <div className={styles.inputcontainer}>
      <input
        type="text"
        placeholder={placeHolder}
        name={name}
        className={styles.input}
      />
    </div>
  );
};

export default Textfield;
