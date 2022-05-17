function getTodos() {
  let url = `${process.env.REACT_APP_API_BASE_URL}/api/todos`;
  return fetch(url)
    .then((data) => data.json())
    .then((result) => {
      return Promise.resolve(result.todos);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
function addTodo(todo) {
  let url = `${process.env.REACT_APP_API_BASE_URL}/api/todo?text=${todo}`;
  return fetch(url)
    .then((data) => data.json())
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
export default { getTodos, addTodo };
