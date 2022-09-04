export default function Reducer(state = {data:[], pageNumber:"", columns:[]}, action) {
    if (action) {
        switch (action.type) {
            case 'FETCHED_USER' :
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_USER_LIST':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            default:
                return state
        }
    }
    return state
}