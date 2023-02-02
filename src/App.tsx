import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import EditContainer from "./container/EditContainer";
import { TodoContextProvider } from "./hooks/useTodoState";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Header />
        <TodoContainer />
        <EditContainer />
      </TodoContextProvider>
    </>
  );
}

export default App;
