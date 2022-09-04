import { takeLatest, call, put } from 'redux-saga/effects';

//watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_TODOS", fetchTodos);
}

function fetchDataFromUrl(callback) {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => callback(res));
}

//worker saga: makes the api call when watcher saga sees the action
function* fetchTodos() {
  try {
    const callbackImpl = (res) => res;
    const response = yield call(fetchDataFromUrl, callbackImpl);
    const data = response;
    console.log('data', data)

    let columns = [];

    for (let column in data[0]) {
      columns.push(column);
    }

    yield put({ type: "FETCHED_TODOS", data, columns });

  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}


