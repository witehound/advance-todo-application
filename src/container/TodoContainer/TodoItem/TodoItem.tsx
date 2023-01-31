import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Inputs } from "../../../components";

const TodoItem = () => {
  return (
    <div className={styles.todocontainer}>
      <Inputs
        type="checkbox"
        name="todoItem"
        placeHolder="Input your to ddo item"
      />
      <div className={styles.title}>Task to do</div>
      <div className={styles.button}>
        <Button>
          <FontAwesomeIcon icon={faPencil} />
        </Button>
      </div>
      <div>
        <Button>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
