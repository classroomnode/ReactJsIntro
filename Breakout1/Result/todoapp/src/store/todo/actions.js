import todoService from "../../service/todo.service";
import * as types from "./types";

function addToDo(payload) {
  return { type: types.SET_TODOS, payload };
}

//thunks
export function addToDos(todo) {
  return (dispatch) => {
    todoService.addTodo(todo).then(() => {
      todoService.getTodos().then((todos) => {
        dispatch(addToDo(todos));
      });
    });
  };
}
export function getAllToDos() {
  return (dispatch) => {
    return todoService.getTodos().then((todos) => {
      dispatch(addToDo(todos));
      return Promise.resolve(true);
    });
  };
}
