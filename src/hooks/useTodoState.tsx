import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
type TodoStateType = {
  todoState: {
    editTodo: number;
    opnSideBar: boolean;
  };
  setTodoState: Dispatch<
    SetStateAction<{ editTodo: number; opnSideBar: boolean }>
  >;
};

const TodoContext = createContext<TodoStateType>({
  todoState: {
    editTodo: -1,
    opnSideBar: false,
  },
  setTodoState: () => {},
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todoState, setTodoState] = useState({
    editTodo: -1,
    opnSideBar: false,
  });

  return (
    <TodoContext.Provider value={{ todoState, setTodoState }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoState = () => useContext(TodoContext);
