import React from "react";
import { useParams } from "react-router-dom";
import { useToDoContext } from "../context/TodoContext";

import "../styles/todolist.css";

function ToDoDetail() {
  const { id } = useParams();
  const { todos } = useToDoContext();
  const todo = todos.find((todo) => todo.id.toString() === id);
  return (
    <div className={"todo-list"}>
      <table>
        <tbody>
          <tr>
            <th>{"Name"}</th>
            <th>{"Date"}</th>
          </tr>
          <tr key={todo.id}>
            <td>{todo.name}</td>
            <td>{todo.date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ToDoDetail;
