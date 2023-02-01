import { AddTodoForm } from "../../partials";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState } from "react";

const TodoContainer = () => {
  const [tempTodo, setTodo] = useState<string[]>([
    "hey today is monday do something",
    "hey today is tueesday do something",
    "hey today is wednesday do something",
  ]);

  return (
    <div className={styles.todocontainerwarp}>
      <AddTodoForm seTodo={setTodo} />
      {tempTodo.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
