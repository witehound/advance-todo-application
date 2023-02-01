import styles from "./TextAreaFeild.module.css";

type TextAreaFeildProps = {
  value: string;
};

const TextAreaFeild = ({ value }: TextAreaFeildProps) => {
  return <textarea className={styles.textAreaField} value={value} />;
};

export default TextAreaFeild;
