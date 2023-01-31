import { AddTodoForm } from "../../partials";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState } from "react";

const TodoContainer = () => {
  const [tempTodo, setTempTodos] = useState<any[]>([
    "hey today is monday do something",
    "hey today is tueesday do something",
    "hey today is wednesday do something",
  ]);

  const [task, setTask] = useState<string>("");

  const onInput = (e: any) => {
    setTask(e.target.value);
  };

  const onAddClicked = (e: any) => {
    setTempTodos((prev) => [...prev, task]);

    setTask("");
  };

  return (
    <div className={styles.todocontainerwarp}>
      <AddTodoForm task={task} onInput={onInput} onAddClicked={onAddClicked} />
      {tempTodo.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
