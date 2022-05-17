import { combineReducers } from "redux";

import todo from "./todo/reducer";

const rootReducer = combineReducers({
  todoController: todo,
});

export default rootReducer;
