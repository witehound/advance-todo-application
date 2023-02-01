import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import { EditContainer } from "./container";

function App() {
  return (
    <>
      <Header />
      <TodoContainer />
      <EditContainer />
    </>
  );
}

export default App;
