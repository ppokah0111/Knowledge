export default function Reducer(state = {todos:[] , columns:[]}, action){
    
    if(action){
        switch (action.type) {
            case 'FETCHED_TODOS': //Target, state, action
                return Object.assign({}, state, {todos: action.data, columns:action.columns})
            default:
                return state
        }
    }
}