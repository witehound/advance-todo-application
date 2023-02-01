import { AddTodoForm } from "../../partials";
import { todoServices } from "../../service";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { Todo } from "../../models/todo";
import { EditContainer } from "../../container";

type TodoContainerProps = {
  todoService: todoServices;
};

const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const [tempTodo, setTodo] = useState<Todo[]>([]);
  const [selectedTask, setSelectedTask] = useState<number>(-1);

  const loadTodos = async () => {
    const list = await todoService.getAllTodo();
    setTodo(list);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className={styles.todocontainerwarp}>
      <AddTodoForm seTodo={setTodo} loadTodos={loadTodos} />
      {tempTodo.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          loadTodos={loadTodos}
          todoService={todoService}
          setSelectedTask={setSelectedTask}
        />
      ))}
      {selectedTask !== -1 ? <EditContainer /> : null}
    </div>
  );
};

export default TodoContainer;
