let initialstate = {todo:[]}

export default function Reducer(state = initialstate, action) {
    //console.log(action);

    if (action) {
      
      switch (action.type) {
        case "fetchedAll":
          //console.log(state);
          return Object.assign({}, state, { todo: action.data});
          
        default:
          break;
      }
    }
    return state;
  }