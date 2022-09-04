const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {

    console.log(action.type === "fetchAll");

    if (action.type === "fetchAll")

      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((res) => dispatch({ type: "fetchedAll", data: res }));

    next(action);
  };

export { apiMiddleware };
