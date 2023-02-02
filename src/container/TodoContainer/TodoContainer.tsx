import { AddTodoForm } from "../../partials";
import { todoServices } from "../../service";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { Todo } from "../../models/todo";
import { ButtonSelect } from "../../components";
import useTodoState from "../../hooks/useTodoState";

type TodoContainerProps = {
  todoService: todoServices;
};

const TodoContainer = ({ todoService }: TodoContainerProps) => {
  const { todoState } = useTodoState();
  const [tempTodo, setTodo] = useState<Todo[]>([]);
  const [todoStateFilter, setTodoStateFilter] = useState<string>("all");

  const loadTodos = async () => {
    const list = await todoService.getAllTodo();
    setTodo(list);
  };

  useEffect(() => {
    loadTodos();
  }, [todoState.editTodo]);

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
        />
      ))}
    </div>
  );
};

export default TodoContainer;
