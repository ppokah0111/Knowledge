export default function Reducer(state = { selecttype:'',todos: [], columns:[] }, action) {
    if (action) {
        switch (action.type) {
            case 'FETCHED':
                return Object.assign({}, state, { todos:action.data, columns:action.columns })
            default:
                return state
        }
    }
    return state
}