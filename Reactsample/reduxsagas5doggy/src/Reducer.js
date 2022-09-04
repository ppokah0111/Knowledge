export default function Reducer(state = { message: "", status: "" }, action) {
  if (action) {
    switch (action.type) {
      case "FETCHED":
        return Object.assign({}, state, {
          message: action.data.message,
          status: action.data.status,
        });

      default:
        return state;
    }
  }
  return state;
}
