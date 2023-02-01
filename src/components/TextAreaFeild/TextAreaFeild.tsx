import styles from "./TextAreaFeild.module.css";

type TextAreaFeildProps = {
  value: string;
  name?: string;
  label?: string;
};

const TextAreaFeild = ({ value, label, name }: TextAreaFeildProps) => {
  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <textarea className={styles.textAreaField} value={value} />;
    </div>
  );
};

export default TextAreaFeild;
