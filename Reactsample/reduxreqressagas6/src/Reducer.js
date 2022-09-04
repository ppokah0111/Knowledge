export default function Reducer(state = { data: {} }, action) {
  if (action) {
    switch (action.type) {
      case "FETCHED":
        return Object.assign({}, state, { data: action.data });

      default:
        return state;
    }
  }
  return state;
}
