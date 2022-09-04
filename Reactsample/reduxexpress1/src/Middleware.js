const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    //console.log(action.type === "fetchDoctor");

    if (action.type === "fetchDoctor")
      fetch(`http://localhost:3000/doctor`) // from express
        .then((res) => res.json())
        .then((res) => dispatch({ type: "fetchedDoctor", data: res }));

    // console.log(action)

    //console.log(action.type === "fetchDoctorById");

    if (action.type === "fetchDoctorByName")
      fetch(`http://localhost:3000/doctor/id?name=${action.hospitalTodoId}`) // from express
        .then((res) => res.json())
        .then((res) => dispatch({ type: "fetchedDoctorByName", data: [res] }));

      //console.log(action.type === "addDoctor");

    if (action.type === "addDoctor")
      fetch(`http://localhost:3000/doctor/`) // from express
        .then((res) => res.json())
        .then((res) => dispatch({ type: "addedDoctor", data: [res] }));

    next(action);
  };

export { apiMiddleware };

/**
 * if (action.type === "addDoctor")

      fetch(`http://localhost:3000/doctor`)
        .then((res) => res.json())
        .then((res) => dispatch({ type: "addedDoctor", data: res }));


    if (action.type === "fetchAll")

      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((res) => dispatch({ type: "fetchedAll", data: res }));
 */
