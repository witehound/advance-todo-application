import styles from "./AddTodoForm.module.css";
import { Button, Textfield } from "../../components";
import { FormEventHandler, useState } from "react";
import { useAutoFocus } from "../../hooks";
import { adddTodo } from "../../utils";

type AddTodoFormProps = {
  seTodo: any;
  loadTodos: () => void;
};

const AddTodoForm = ({ seTodo, loadTodos }: AddTodoFormProps) => {
  const onInput = (task: string) => {
    setTask(task);
  };

  const [task, setTask] = useState<string>("");

  const onAddClicked: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    await adddTodo({
      todo: task,
    });
    loadTodos();
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
