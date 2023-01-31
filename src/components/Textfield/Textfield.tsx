import styles from "./Textfield.module.css";

type TextfieldProps = {
  placeHolder: string;
  name: string;
  onInput: (e: any) => void;
  value?: string;
};

const Textfield = ({ placeHolder, name, onInput, value }: TextfieldProps) => {
  return (
    <div className={styles.inputcontainer}>
      <input
        type="text"
        placeholder={placeHolder}
        name={name}
        className={styles.input}
        onChange={(e: any) => onInput(e)}
        value={value}
      />
    </div>
  );
};

export default Textfield;
