import styles from "./AddTodoForm.module.css";
import { Button, Textfield } from "../../components";
import { FormEventHandler, useState } from "react";
import { useAutoFocus } from "../../hooks";
import { todoServices } from "../../service";

type AddTodoFormProps = {
  loadTodos: () => void;
  todoService: todoServices;
};

const AddTodoForm = ({ loadTodos, todoService }: AddTodoFormProps) => {
  const onInput = (task: string) => {
    setTask(task);
  };

  const [task, setTask] = useState<string>("");

  const onAddClicked: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    await todoService.adddTodo({
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
