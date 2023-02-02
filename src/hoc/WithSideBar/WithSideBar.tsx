import { ComponentProps, ElementType, useContext } from "react";
import styles from "./WithSideBar.module.css";
import { TodoContext } from "../../App";

const WithSideBar =
  (Component: ElementType) => (props: ComponentProps<typeof Component>) => {
    const { todoState } = useContext(TodoContext);
    if (todoState.editTodo === -1) return null;
    return (
      <div className={styles.edit}>
        <Component {...props} />
      </div>
    );
  };

export default WithSideBar;
