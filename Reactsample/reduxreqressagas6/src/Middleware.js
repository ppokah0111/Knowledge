import { takeLatest, call, put } from "redux-saga/effects";
const callbackImpl = (res) => res

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("SAVE", saveData);
}


function saveUrlWithParams(url, data, callback) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(res => callback(res))
}
//workers can get action object

// worker saga: makes the api call when watcher saga sees the action
function* saveData(action) {
  try {
    console.log(action.for)
    let url = `https://reqres.in/api/users`
    const response = yield call(saveUrlWithParams, url, action.data, callbackImpl);
    const data = response;
    console.log('data', data)


    yield put({ type: "FETCHED", data });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
