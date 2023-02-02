import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox } from "../../../components";
import { Todo } from "../../../models/todo";
import { todoServices } from "../../../service";
import { useContext } from "react";
import { TodoContext } from "../../../App";

type TodoItemProps = {
  todo: Todo;
  loadTodos: () => void;
  todoService: todoServices;
  onDonClicked: (id: number, isDone: boolean) => void;
};

const TodoItem = ({
  todo,
  loadTodos,
  todoService,
  onDonClicked,
}: TodoItemProps) => {
  const { setTodoState, todoState } = useContext(TodoContext);
  console.log();
  const handleDeleteTodo = async () => {
    await todoService.deleteTodo(todo.id);
    loadTodos();
  };

  const handleEditTodo = (id: number) => {
    setTodoState({ editTodo: id });
  };

  return (
    <div className={styles.todocontainer}>
      <Checkbox
        name="todoItem"
        value={todo.isDone}
        onInput={(value) => onDonClicked(todo.id, value)}
      />
      <div className={`${styles.title} ${todo.isDone && styles.isDone}`}>
        {todo.task}
      </div>
      <div className={styles.button}>
        <Button
          style="transparent"
          handleOnClick={() => {
            handleEditTodo(todo.id);
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </Button>
      </div>
      <div>
        <Button style="transparent" handleOnClick={handleDeleteTodo}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
