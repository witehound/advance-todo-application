import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox } from "../../../components";
import { Todo } from "../../../models/todo";
import { todoServices } from "../../../service";

type TodoItemProps = {
  todo: Todo;
  loadTodos: () => void;
  todoService: todoServices;
};

const TodoItem = ({ todo, loadTodos, todoService }: TodoItemProps) => {
  const handleDeleteTodo = async () => {
    await todoService.deleteTodo(todo.id);
    loadTodos();
  };

  return (
    <div className={styles.todocontainer}>
      <Checkbox name="todoItem" />
      <div className={styles.title}>{todo.task}</div>
      <div className={styles.button}>
        <Button style="transparent">
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
