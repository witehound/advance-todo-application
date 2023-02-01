import styles from "./AddTodoForm.module.css";
import { Button, Textfield } from "../../components";
import { FormEventHandler, useState, useRef, useEffect } from "react";
import { useAutoFocus } from "../../hooks";

type AddTodoFormProps = {
  seTodo: any;
};

const AddTodoForm = ({ seTodo }: AddTodoFormProps) => {
  const onInput = (task: string) => {
    setTask(task);
  };

  const [task, setTask] = useState<string>("");

  const onAddClicked: FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();
    seTodo((prev: string[]) => [...prev, task]);
    setTask("");
  };

  const elemntRef = useAutoFocus();

  return (
    <form className={styles.form} onSubmit={(e) => onAddClicked(e)}>
      <Textfield
        placeHolder=""
        name=""
        onInput={(e) => onInput(e)}
        value={task}
        ref={elemntRef}
      />
      <Button type="submit" style="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
