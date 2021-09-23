import React, { useState, useEffect } from "react";
import useTaskStatus from "../hooks/useTaskStatus";
import getTodos from "../service/todo.service";
import ToDoList from "./ToDoList";

function ExampleWithFunction() {
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
    getTodos()
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
export default ExampleWithFunction;
