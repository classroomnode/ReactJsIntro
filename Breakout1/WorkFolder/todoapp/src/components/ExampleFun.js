import React, { useState, useEffect } from "react";
import useTaskStatus from "../hooks.js/useTaskStatus";
import ToDoList from "./ToDoList";

function Example() {
  const [count, setCount] = useState(0);
  const status = useTaskStatus(count);
  const [todos, setTodos] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    //login update th price
  }, [count]);

  useEffect(() => {
    let url = `http://localhost:8080/api/todo`;
    fetch(url)
      .then(data => data.json())
      .then(result => {
        if (result) setTodos(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>{status}</h1>
      {todos && todos.length > 0 && <ToDoList todos={todos}></ToDoList>}
    </div>
  );
}
export default Example;
