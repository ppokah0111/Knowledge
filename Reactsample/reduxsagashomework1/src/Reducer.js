export default function Reducer(state = {data:[], pageNumber:"", columns:[]}, action) {
    if (action) {
        switch (action.type) {
            case 'FETCHED_USER' :
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_USER_LIST':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_RESOURCE' :
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_RESOURCE_LIST':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            

            case 'POST_CREATED':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'PUT_UPDATED': 
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })


                
            case 'POST_REGISTERED_SUCCESS':
                return Object.assign({}, state, { id:action.id, token:action.token })

            case 'POST_REGISTERED_FAILURE':
                return Object.assign({}, state, { error:action.error })

            case 'POST_LOGGEDIN_SUCCESS':
                return Object.assign({}, state, { token:action.token  })

            case 'POST_LOGGEDIN_FAILURE':
                return Object.assign({}, state, { error:action.error })

            default:
                return state
        }
    }
    return state
}