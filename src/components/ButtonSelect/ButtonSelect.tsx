import Button from "../Button/Button";
import styles from "./ButtonSelect.module.css";

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
    <div className={styles.div}>
      {options.map((option, i) => (
        <Button
          handleOnClick={() => onInput(option.value)}
          key={i}
          style={`primary ${value == option.value && styles.selected}`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonSelect;
