import { takeLatest, call, put } from "redux-saga/effects";
const callbackImpl = (res) => res;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH", fetchData);
}

function fetchDataFromUrlWithParams(url, callback) {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => callback(res));
}
//workers can get action object

// worker saga: makes the api call when watcher saga sees the action
function* fetchData(action) {
  try {
    console.log(action.for);
    let url = `https://dog.ceo/api/breeds/image/random`;
    const response = yield call(fetchDataFromUrlWithParams, url, callbackImpl);
    const data = response;
    console.log("data", data);

    yield put({ type: "FETCHED", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
