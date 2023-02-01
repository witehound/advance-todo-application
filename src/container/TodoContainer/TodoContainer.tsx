import { AddTodoForm } from "../../partials";
import { getAllTodo } from "../../utils";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { Todo } from "../../models/todo";

const TodoContainer = () => {
  const [tempTodo, setTodo] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const list = await getAllTodo();
    setTodo(list);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className={styles.todocontainerwarp}>
      <AddTodoForm seTodo={setTodo} loadTodos={loadTodos} />
      {tempTodo.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
