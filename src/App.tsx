import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import EditContainer from "./container/EditContainer";
import useTodoState from "./hooks/useTodoState";

function App() {
  const { TodoContext, todoState, setTodoState } = useTodoState();
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
