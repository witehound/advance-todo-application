import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import EditContainer from "./container/EditContainer";
import { TodoContextProvider } from "./hooks/useTodoState";
import { StatsContainer } from "./container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <TodoContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TodoContainer />
                  <EditContainer />
                </>
              }
            />
            <Route path="/stat" element={<StatsContainer />} />
          </Routes>
        </TodoContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
