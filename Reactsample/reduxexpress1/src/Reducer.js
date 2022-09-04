let initialstate = { todo: [] };
export default function Reducer(state = initialstate, action) {
  console.log(action);

  if (action) {
    switch (action.type) {
      case "fetchedDoctor":
        //console.log(state);
        return Object.assign({}, state, { todo: action.data });

      case "fetchedDoctorByName":
        // console.log(state);
        //console.log(action)
        return Object.assign({}, state, { todo: action.data });

      case "addDoctor":
        // console.log(state);
        //console.log(action)
        return Object.assign({}, state, { todo: action.data });

      default:
        break;
    }
  }
  return state;
}

/**
 * 
 *  case "addedDoctor":
        console.log(state);
        return Object.assign({}, state, { todo: action.data });

              case "fetchedAll":
        console.log(state);
        return Object.assign({}, state, { todo: action.data });
 */
