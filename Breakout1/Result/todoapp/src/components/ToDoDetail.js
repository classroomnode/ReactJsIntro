import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../styles/todolist.css";

function ToDoDetail() {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoController);
  console.log(todos);
  const todo = todos.find((todo) => todo.id.toString() === id);
  return (
    <div className={"todo-list"}>
      <tr key={todo.id}>
        <td>{todo.name}</td>
        <td>{todo.date}</td>
      </tr>
    </div>
  );
}

export default ToDoDetail;
