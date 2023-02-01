import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox } from "../../../components";
import { Todo } from "../../../models/todo";
import { todoServices } from "../../../service";

type TodoItemProps = {
  todo: Todo;
  loadTodos: () => void;
};

const TodoItem = ({ todo, loadTodos }: TodoItemProps) => {
  const todoService = new todoServices();
  const handleDeleteTodo = async () => {
    await todoService.deleteTodo(todo.id);
    loadTodos();
  };

  return (
    <div className={styles.todocontainer}>
      <Checkbox name="todoItem" placeHolder="Input your to ddo item" />
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
