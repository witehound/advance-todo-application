import { useEffect, useState } from "react";
import { todoServices } from "../../service";
import styles from "./StatsContainer.module.css";

import { Todo } from "../../models/todo";

type StatsContainerProps = {
  todoService: todoServices;
};

const StatsContainer = ({ todoService }: StatsContainerProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const loadTodos = async () => {
    const data = await todoService.getAllTodo();
    setTodos(data);
  };
  useEffect(() => {
    loadTodos();
  }, []);

  const doneTodos = todos && todos.filter((todo) => todo.isDone);
  const activeTodos = todos && todos.filter((todo) => !todo.isDone);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Stats</h2>
      <div className={styles.stats}>
        <div>
          <div>Active To do : ({doneTodos.length})</div>
          <ul className={styles.ul}>
            {doneTodos.map((todo, i) => (
              <li key={i} className={styles.li}>
                {todo.task}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>Done To Do : ({activeTodos.length})</div>
          <ul className={styles.ul}>
            {activeTodos.map((todo, i) => (
              <li key={i} className={styles.li}>
                {todo.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
