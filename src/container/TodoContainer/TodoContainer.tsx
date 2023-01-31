import { Button, Textfield } from "../../components";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState } from "react";

const TodoContainer = () => {
  const [tempTodo, setTodos] = useState<any[]>([
    "hey today is monday do something",
    "hey today is tueesday do something",
    "hey today is wednesday do something",
  ]);

  const onAddClicked = () => {};
  return (
    <div className={styles.todocontainerwarp}>
      <form className={styles.form}>
        <Textfield placeHolder="" name="" />
        <Button style="primary" onClick={() => onAddClicked()}>
          Add
        </Button>
      </form>
      {tempTodo.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
