import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox } from "../../../components";

type TodoItemProps = {
  todo: string;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={styles.todocontainer}>
      <Checkbox name="todoItem" placeHolder="Input your to ddo item" />
      <div className={styles.title}>{todo}</div>
      <div className={styles.button}>
        <Button style="transparent" onClick={() => {}}>
          <FontAwesomeIcon icon={faPencil} />
        </Button>
      </div>
      <div>
        <Button style="transparent" onClick={() => {}}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
