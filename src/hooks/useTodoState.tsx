import { Dispatch, SetStateAction, createContext, useState } from "react";
type TodoStateType = {
  todoState: {
    editTodo: number;
    opnSideBar: boolean;
  };
  setTodoState: Dispatch<
    SetStateAction<{ editTodo: number; opnSideBar: boolean }>
  >;
};

const useTodoState = () => {
  const TodoContext = createContext<TodoStateType>({
    todoState: {
      editTodo: -1,
      opnSideBar: false,
    },
    setTodoState: () => {},
  });

  const [todoState, setTodoState] = useState({
    editTodo: -1,
    opnSideBar: false,
  });

  return {
    todoState,
    setTodoState,
    TodoContext,
  };
};

export default useTodoState;
