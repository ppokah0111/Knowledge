export default function Reducer(state = { selecttype:'todos',todos: [],columns:[] }, action) {
    if (action) {
        switch (action.type) {
            case 'FETCHED':
                return Object.assign({}, state, { todos: action.data,
                    columns:action.columns,selecttype:action.selecttype })

            case "CHANGE_SELECTION":
                return Object.assign({}, state, { selecttype:action.selecttype })
            default:
                return state

        }

    }
    return state


}