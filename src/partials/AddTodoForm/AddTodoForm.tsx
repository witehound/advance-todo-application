import styles from "./AddTodoForm.module.css";
import { Button, Textfield } from "../../components";
import { useState } from "react";

type AddTodoFormProps = {
  seTodo: any;
};

const AddTodoForm = ({ seTodo }: AddTodoFormProps) => {
  const onInput = (task: string) => {
    setTask(task);
  };

  const [task, setTask] = useState<string>("");

  const onAddClicked = (e: any) => {
    e.preventDefault();
    seTodo((prev: string[]) => [...prev, task]);
    setTask("");
  };

  return (
    <form className={styles.form} onSubmit={(e) => onAddClicked(e)}>
      <Textfield
        placeHolder=""
        name=""
        onInput={(e) => onInput(e)}
        value={task}
      />
      <Button type="submit" style="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
