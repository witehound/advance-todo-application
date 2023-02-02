import styles from "../Button/Button.module.css";
import stylesTwo from "./ButtonSelect.module.css";

type ButtonSelectOption = {
  label: string;
  value: string;
};
type ButtonSelectProps = {
  value: string;
  options: ButtonSelectOption[];
  onInput: (value: string) => void;
};
const ButtonSelect = ({ value, options, onInput }: ButtonSelectProps) => {
  console.log(typeof value);
  return (
    <div className={stylesTwo.div}>
      {options.map((option, i) => (
        <button
          onClick={() => onInput(option.value)}
          className={`${
            value === option.value ? styles.primary : styles.secondary
          }`}
          key={i}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonSelect;
