import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import EditContainer from "./container/EditContainer";

type TodoStateType = {
  todoState: {
    editTodo: number;
  };
  setTodoState: Dispatch<SetStateAction<{ editTodo: number }>>;
};

export const TodoContext = createContext<TodoStateType>({
  todoState: {
    editTodo: -1,
  },
  setTodoState: () => {},
});

function App() {
  const [todoState, setTodoState] = useState({ editTodo: -1 });
  return (
    <TodoContext.Provider value={{ todoState, setTodoState }}>
      <>
        <Header />
        <TodoContainer />
        <EditContainer />
      </>
    </TodoContext.Provider>
  );
}

export default App;
