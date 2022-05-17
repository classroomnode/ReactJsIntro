import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDos } from "../store/todo/actions";

const TodoEntry = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function onBluChange(event) {
    setValue(event.target.value);
  }

  //adds a todo
  useEffect(() => {
    if (value !== "") {
      dispatch(addToDos(value));
    }
  }, [value]);
  return (
    <div className={"todo-section"}>
      <p className={"todo-title"}>{"Please enter todays tasks"}</p>

      <input
        placeholder={"enter a task name"}
        className={"todo-input"}
        type={"text"}
        onBlur={onBluChange}
      ></input>
    </div>
  );
};
export default TodoEntry;
