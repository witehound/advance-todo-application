import styles from "./AddTodoForm.module.css";
import { Button, Textfield } from "../../components";

type AddTodoFormProps = {
  task: string;
  onInput: (e: any) => void;
  onAddClicked: (e: any) => void;
};

const AddTodoForm = ({ task, onInput, onAddClicked }: AddTodoFormProps) => {
  return (
    <form className={styles.form}>
      <Textfield
        placeHolder=""
        name=""
        onInput={(e) => onInput(e)}
        value={task}
      />
      <Button style="primary" onClick={(e) => onAddClicked(e)}>
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
