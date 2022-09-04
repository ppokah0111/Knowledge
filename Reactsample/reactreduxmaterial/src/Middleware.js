const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    //console.log(action.type === 'fetchById')
    
    if(action.type === 'fetchById')
    fetch(`https://jsonplaceholder.typicode.com/todos/${action.todoId}`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "fetchedAll", data: [res] })); 

      
    if(action.type === 'fetchAll')
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((res) => dispatch({ type: "fetchedAll", data: res })); 

    next(action)
  };

  export {apiMiddleware}