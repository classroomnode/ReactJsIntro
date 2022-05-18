import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App({ title, subtitle }) {
  const [count, setCount] = React.useState(0);
  const [added, setAdded] = React.useState(false);
  const { todos, loading } = useTodos(added);

  function clickMe(numer) {
    console.log("click", numer);
    setCount(numer);
  }
  if (loading) {
    return <div>{"loading"}</div>;
  }
  return (
    <div className="App">
      {added && <div>{"added"}</div>}
      <p>
        <TaskStatus count={count} />
      </p>
      <CreateTodo
        onCreate={() => {
          setAdded(true);
        }}
      ></CreateTodo>
      <NumberList numbers={todos} clickMe={clickMe}></NumberList>
    </div>
  );
}

export default App;

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correct! Key should be specified inside the array.
    <div
      onClick={() => {
        props.clickMe(number);
      }}
      key={number.toString()}
    >
      <ListItem value={number.id} />
    </div>
  ));
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}

function useTaskStatus(taskId) {
  const [taskStatus, setTaskStatus] = useState(null);
  useEffect(() => {
    setTaskStatus(taskId !== 1 ? "done" : "pending");
  }, [taskId]);

  return { taskStatus };
}

function TaskStatus({ count }) {
  const { taskStatus } = useTaskStatus(count);

  return (
    <div className={taskStatus === "done" ? "stock" : "nostock"}>
      {taskStatus}
    </div>
  );
}

function useTodos(added) {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(
      "https://todo-backend-dot-ingka-salja-web-dev.ew.r.appspot.com/api/todos"
    )
      .then((data) => data.json())
      .then((result) => {
        setTodos(result.todos);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }, [added]);
  return {
    todos,
    loading,
  };
}

function CreateTodo({ onCreate }) {
  const [value, setValue] = React.useState("");

  function addTodo() {
    fetch(
      `https://todo-backend-dot-ingka-salja-web-dev.ew.r.appspot.com/api/todo?value=${value}`
    )
      .then((data) => data.json())
      .then((result) => {
        onCreate("success");
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  return (
    <div>
      <input
        type="text"
        id="todo"
        placeholder="Add todo"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}
