export default function Reducer(state = { counter: 0 }, action) {
  console.log(action);

  if (action) {
    switch (action.type) {
      case "inc":
        console.log(state);
        return Object.assign({}, state, { counter: state.counter + 1 });

      default:
        break;
    }
  }
  return state;
}
