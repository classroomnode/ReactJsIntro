import * as types from "./types";
const initialState = {
  todos: [],
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_TODOS: {
      return {
        ...state,
        todos: [...action.payload],
      };
    }

    default:
      return state;
  }
}
