/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/todolist.css";
function ListItem({ todo }) {
  const navigate = useNavigate();
  // Correct! There is no need to specify the key here:
  return (
    <tr
      key={todo.id}
      onClick={() => {
        console.log("clicked");
        navigate(`/todo/${todo.id}`);
      }}
    >
      <td>{todo.name}</td>
      <td>{todo.date}</td>
    </tr>
  );
}

function TodoList() {
  const { todos } = useSelector((state) => state.todoController);
  return (
    <div className={"todo-list"}>
      <table>
        <tbody>
          <tr>
            <th>{"Name"}</th>
            <th>{"Date"}</th>
          </tr>
          {todos && todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
