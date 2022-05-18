import React from "react";
import { useToDoContext } from "../context/TodoContext";

const AppHeader = () => {
  const { todos = [] } = useToDoContext();
  return (
    <div className="App-header">
      {"React Todo"}
      {todos.length}
    </div>
  );
};

export default AppHeader;
