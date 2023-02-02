import { AddTodoForm } from "../../partials";
import { todoServices } from "../../service";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { Todo } from "../../models/todo";
import { EditContainer } from "../index";
import { ButtonSelect } from "../../components";

type TodoContainerProps = {
  todoService: todoServices;
};

const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const [tempTodo, setTodo] = useState<Todo[]>([]);
  const [selectedTask, setSelectedTask] = useState<number>(-1);
  const [todoStateFilter, setTodoStateFilter] = useState<string>("all");

  const loadTodos = async () => {
    const list = await todoService.getAllTodo();
    setTodo(list);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const closeEditContainer = () => {
    setSelectedTask(-1);
  };
  const onSaveClick = () => {
    closeEditContainer();
    loadTodos();
  };

  const onDonClicked = async (id: number, isDone: boolean) => {
    await todoService.updateTodo(id, {
      isDone,
    });
    loadTodos();
  };

  const onSeleectTodoStateFilter = async (value: string) => {
    setTodoStateFilter(value);
    setTodo(await todoService.getAllTodo(value));
  };

  const selectOptions = [
    { label: "All", value: "all" },
    { label: "Done", value: "true" },
    { label: "Not Done", value: "false" },
  ];

  return (
    <div className={styles.todocontainerwarp}>
      <AddTodoForm loadTodos={loadTodos} todoService={todoService} />
      <ButtonSelect
        value={todoStateFilter}
        options={selectOptions}
        onInput={onSeleectTodoStateFilter}
      />
      {tempTodo.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          loadTodos={loadTodos}
          todoService={todoService}
          onDonClicked={onDonClicked}
          setSelectedTask={setSelectedTask}
        />
      ))}
      {selectedTask !== -1 ? (
        <EditContainer
          selectedTask={selectedTask}
          onSaveClick={onSaveClick}
          onCloseClick={closeEditContainer}
        />
      ) : null}
    </div>
  );
};

export default TodoContainer;
