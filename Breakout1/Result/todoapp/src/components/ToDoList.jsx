/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useToDoContext } from "../context/TodoContext";

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
  const { todos } = useToDoContext();
  return (
    <div>
      <p>Todos</p>
      <div className={"todo-list"}>
        <table>
          <tbody>
            <tr>
              <th>{"Name"}</th>
              <th>{"Date"}</th>
            </tr>
            {todos &&
              todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
