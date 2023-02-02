import { ComponentProps, ElementType } from "react";
import styles from "./WithSideBar.module.css";
import { useTodoState } from "../../hooks/useTodoState";

const WithSideBar =
  (Component: ElementType) => (props: ComponentProps<typeof Component>) => {
    const { todoState } = useTodoState();

    return todoState.opnSideBar ? (
      <div className={styles.edit}>
        <Component {...props} />
      </div>
    ) : null;
  };

export default WithSideBar;
