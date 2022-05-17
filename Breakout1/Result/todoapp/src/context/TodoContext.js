import React, { createContext, useContext, useState } from "react";
import todoService from "../service/todo.service";

export const ToDoContext = createContext();
export const useToDoContext = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  const [todos, setToDos] = useState();
  function addToDo(todo) {
    todoService.addTodo(todo).then(() => {
      todoService.getTodos().then((todos) => {
        setToDos(todos);
      });
    });
  }
  function getAllToDos() {
    return todoService.getTodos().then((todos) => {
      setToDos(todos);
      return Promise.resolve(true);
    });
  }

  return (
    <ToDoContext.Provider value={{ getAllToDos, addToDo, todos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};
