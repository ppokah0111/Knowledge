import {takeLatest, call, put} from "redux-saga/effects";

//watcher saga: watches for actions dispatches to the store, starts worker saga
export function* watcherSaga(){
    yield takeLatest("FETCH_TODOS", fetchTodos);
    yield takeLatest("FETCH_TODO_BY_ID", fetchTodosById);
}

function fetchDataFromUrl(callback){
    return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => callback(res))
}

function fetchDataFromUrlWithParams(url, callback){
    return fetch(url)
            .then(res => res.json())
            .then(res => callback(res))
}

//workers can get action object
function* fetchTodosById(action){
    try{
        const callbackImpl = (res) => res
        let url = `https://jsonplaceholder.typicode.com/todos/${action.todoId}`
        const response = yield call(fetchDataFromUrlWithParams, url, callbackImpl)
        const data = [response]
        console.log('data',data)

        let columns = []
        for (let column in data[0]){
            columns.push(column)
        }

    yield put({type: "FETCHED_TODOS", data, columns })

    }catch(error){
        //dispatch a failure action to the store with the error
        yield put({type: "API_CALL_FAILURE",error});
    }
}

//worker saga: makes the api call when watcher saga sees the action
function* fetchTodos(){
    try {
        const callbackImpl = (res) => res
        const response = yield call(fetchDataFromUrl,callbackImpl);
        const data = response;
        console.log('data', data)

        let columns = []
        for (let column in data[0]){
            columns.push(column)
        }

        yield put({type: "FETCHED_TODOS", data, columns});
    } catch (error) {
         //dispatch a failure action to the store with the error
         yield put({type: "API_CALL_FAILURE",error});
    }
}
