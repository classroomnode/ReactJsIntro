import React from "react";

function ListItem({ todo }) {
  // Correct! There is no need to specify the key here:
  return <li>{`${todo.id}${todo.name}${todo.status}`}</li>;
}

function ToDoList(props) {
  const todos = props.todos;
  const listItems = todos.map(todo => (
    // Correct! Key should be specified inside the array.
    <ListItem key={todo.id} todo={todo} />
  ));
  return <ul>{listItems}</ul>;
}
export default ToDoList;
