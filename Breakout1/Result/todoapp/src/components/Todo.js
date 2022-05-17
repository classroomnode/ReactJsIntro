import React from "react";
import useToDo from "../hooks/useTodo";
import "../styles/todo.css";
import TodoEntry from "./TodoEntry";
import TodoList from "./ToDoList";
function Todo() {
  const { loading } = useToDo();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <TodoEntry></TodoEntry>

      <TodoList></TodoList>
    </div>
  );
}
export default Todo;
