import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ToDoProvider } from "./context/TodoContext";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <ToDoProvider>
        <div className="App">
          <>
            <AppHeader></AppHeader>
            <AppRoutes></AppRoutes>
          </>
        </div>
      </ToDoProvider>
    </BrowserRouter>
  );
}

export default App;
