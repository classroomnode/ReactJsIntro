function getTodos() {
  let url = `http://localhost:8080/api/todo`;
  return fetch(url)
    .then(data => data.json())
    .then(result => {
      return Promise.resolve(result);
    })
    .catch(error => {
      return Promise.reject(error);
    });
}

export default getTodos;
