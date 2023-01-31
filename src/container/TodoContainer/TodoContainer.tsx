import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoContainer = () => {
  return (
    <div className={styles.todocontainerwarp}>
      <TodoItem />
    </div>
  );
};

export default TodoContainer;
