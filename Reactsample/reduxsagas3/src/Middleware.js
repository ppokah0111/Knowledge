import { takeLatest, call, put } from "redux-saga/effects";
const callbackImpl = (res) => res;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH", fetchData);
  yield takeLatest("FETCH_BY_ID", fetchDataById);
}

function fetchDataFromUrlWithParams(url, callback) {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => callback(res));
}
//workers can get action object
function* fetchDataById(action) {
  try {
    let url = `https://jsonplaceholder.typicode.com/${action.for}/${action.idTofetch}`;
    const response = yield call(fetchDataFromUrlWithParams, url, callbackImpl);
    const data = [response];
    console.log("data", data);
    let columns = [];
    for (let column in data[0]) {
      columns.push(column);
    }
    yield put({ type: "FETCHED", data, columns });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
// worker saga: makes the api call when watcher saga sees the action
function* fetchData(action) {
  try {
    console.log(action.for);
    let url = `https://jsonplaceholder.typicode.com/${action.for}/`;
    const response = yield call(fetchDataFromUrlWithParams, url, callbackImpl);
    const data = response;
    console.log("data", data);
    let columns = [];
    for (let column in data[0]) {
      columns.push(column);
    }

    yield put({ type: "FETCHED", data, columns });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
