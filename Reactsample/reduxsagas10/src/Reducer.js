export default function Reducer(state = {data:[], pageNumber:"", columns:[], id:"", token: "", error:""}, action) {
    if (action) {
        switch (action.type) {
            case 'FETCHED_USER' :
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_USER_LIST':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_REGISTER_SUCCESSFUL':
                return Object.assign({}, state, { id:action.id, token:action.token })

            case 'FETCHED_LOGIN_SUCCESSFUL':
                return Object.assign({}, state, { token:action.token  })

            case 'FETCHED_LOGIN_UNSUCCESSFUL':
                return Object.assign({}, state, { error:action.error })

            case 'FETCHED_RESOURCE' :
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })

            case 'FETCHED_RESOURCE_LIST':
                return Object.assign({}, state, { data:action.data, columns:action.columns, pageNumber:action.pageNumber })


            default:
                return state
        }
    }
    return state
}