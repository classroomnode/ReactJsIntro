import "./App.css";
import React from "react";
import StoreProvider from "./store/storeProvider";
// import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ToDoProvider } from "./context/TodoContext";

function App() {
  return (
    <BrowserRouter>
      <ToDoProvider>
        <StoreProvider>
          <div className="App">
            <AppRoutes></AppRoutes>
          </div>
        </StoreProvider>
      </ToDoProvider>
    </BrowserRouter>
  );
}

export default App;
