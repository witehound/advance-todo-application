import styles from "../TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = () => {
  return (
    <div className={styles.todocontainer}>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <div className={styles.title}>Task to do</div>
      <div className={styles.button}>
        <button>
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
