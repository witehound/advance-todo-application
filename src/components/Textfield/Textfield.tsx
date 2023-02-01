import { useEffect, useRef } from "react";
import styles from "./Textfield.module.css";

type TextfieldProps = {
  placeHolder: string;
  name: string;
  onInput: (task: string) => void;
  value?: string;
};

const Textfield = ({ placeHolder, name, onInput, value }: TextfieldProps) => {
  const inPutRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inPutRef.current?.focus();
  }, []);
  return (
    <div className={styles.inputcontainer}>
      <input
        ref={inPutRef}
        type="text"
        placeholder={placeHolder}
        name={name}
        className={styles.input}
        onChange={(e: any) => onInput(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Textfield;
