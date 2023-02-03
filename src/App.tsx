import { Header } from "./partials";
import { TodoContainer } from "./hoc";
import "./styles/App.css";
import EditContainer from "./container/EditContainer";
import { TodoContextProvider } from "./hooks/useTodoState";
import { AboutContainer } from "./container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StatsContainer from "./container/StatsContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <TodoContextProvider>
          <Header />
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
            <Route path="/about" element={<AboutContainer />} />
          </Routes>
        </TodoContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
