import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoContainer = () => {
  return (
    <div className={styles.todocontainerwarp}>
      <TodoItem todo={"hello world"} />
      <TodoItem todo={"hello world"} />
      <TodoItem todo={"hello world"} />
    </div>
  );
};

export default TodoContainer;
