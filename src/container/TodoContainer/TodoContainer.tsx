import { Button, Textfield } from "../../components";
import styles from "./TodoContainer.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoContainer = () => {
  const tempTodo = [
    "hey today is monday do something",
    "hey today is tueesday do something",
    "hey today is wednesday do something",
  ];
  return (
    <div className={styles.todocontainerwarp}>
      <form className={styles.form}>
        <Textfield placeHolder="" name="" />
        <Button>Add</Button>
      </form>
      {tempTodo.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
