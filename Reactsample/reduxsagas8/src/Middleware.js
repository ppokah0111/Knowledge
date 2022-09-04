import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("FETCH_USER_LIST", fetchUserList);
}

const callbackImpl = (res) => res;

function fetchData(url, callback){
 return fetch(url)
          .then(res => res.json())
          .then(res => callback(res))
}

function* fetchUserList(){
  const response = yield call(fetchData, 'https://reqres.in/api/unknown', callbackImpl)

  const data = response.data
  const pageNumber = response.page

  let columns = []
  for (let columnName in data[0]){
    columns.push(columnName)
  }

  yield put({
    type: 'FETCHED_USER_LIST', data, pageNumber, columns
  })

}

function* fetchUser(){
  const response = yield call(fetchData, 'https://reqres.in/api/users?page=1', callbackImpl)
  
  const data = response.data
  const pageNumber = response.page

  let columns = []
  for (let columnName in data[0]){
    columns.push(columnName)
  }

  yield put({
    type: 'FETCHED_USER', data, pageNumber, columns
  })
}