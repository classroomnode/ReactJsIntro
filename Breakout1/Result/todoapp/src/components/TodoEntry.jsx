import React, { useState } from "react";
import { useToDoContext } from "../context/TodoContext";
import "../styles/todoentry.css";
const TodoEntry = () => {
  const { addToDo } = useToDoContext();
  const [value, setValue] = useState("");
  function onBlurChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={"todo-section"}>
      <div className={"todo-entry"}>
        <p className={"todo-title"}>{"Please enter todays tasks"}</p>

        <div className="todo-input-section">
          <input
            placeholder={"enter a task name"}
            className={"todo-input"}
            type={"text"}
            onBlur={onBlurChange}
          ></input>
          <button
            onClick={() => {
              addToDo(value);
            }}
            className="todo-add"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoEntry;
