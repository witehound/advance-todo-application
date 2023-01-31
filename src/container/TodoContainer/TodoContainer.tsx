import "./TodoContainer.module.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <div>Task to do</div>
      <div>
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

export default TodoContainer;
