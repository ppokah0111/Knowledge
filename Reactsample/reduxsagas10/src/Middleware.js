import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("FETCH_USER_LIST", fetchUserList);

  yield takeLatest("FETCH_RESOURCE", fetchResource);
  yield takeLatest("FETCH_RESOURCE_LIST", fetchResourceList);

  yield takeLatest("FETCH_REGISTER_SUCCESSFUL", fetchRegisterSuccessful)

  yield takeLatest("FETCH_LOGIN_SUCCESSFUL", fetchLogin_Successful)
  yield takeLatest("FETCH_LOGIN_UNSUCCESSFUL", fetchLogin_UnSuccessful)
  
}

const callbackImpl = (res) => res;

function fetchData(url, callback){
 return fetch(url)
          .then(res => res.json())
          .then(res => callback(res))
}


function fetchDate_RegisterSuccessful(url, data, callback){
 return fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => callback(json));
}

//REGISTER SUCCESSFULLY - POST - https://reqres.in/api/register
function* fetchRegisterSuccessful(action){
  console.log("inside fetchRegisterSuccessful")
  console.log(action)
  const response = yield call(fetchDate_RegisterSuccessful, 'https://reqres.in/api/register', {email:action.email, password:action.password}, callbackImpl)
  console.log(response)
  const id = response.id
  const token = response.token

  yield put({
    type: 'FETCHED_REGISTER_SUCCESSFUL', id, token
  })
}

//LOGIN SUCCESSFULLY - POST - https://reqres.in/api/login
function* fetchLogin_Successful(action){
  console.log("inside fetchLogin_Successful")
  console.log(action)
  const response = yield call(fetchDate_RegisterSuccessful, 'https://reqres.in/api/login', {email:action.email, password:action.password}, callbackImpl)
  console.log(response)
  const token = response.token

  yield put({
    type: 'FETCHED_LOGIN_SUCCESSFUL', token
  })
}

//LOGIN UNSUCCESSFULLY - POST - https://reqres.in/api/login
function* fetchLogin_UnSuccessful(action){
  console.log("inside fetchLogin_UnSuccessful")
  console.log(action)
  const response = yield call(fetchDate_RegisterSuccessful, 'https://reqres.in/api/login', {email:action.email}, callbackImpl)
  console.log(response)
  const error = response.error

  yield put({
    type: 'FETCHED_LOGIN_UNSUCCESSFUL', error
  })
}

//GET
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

function* fetchUser(action){
  const response = yield call(fetchData, `https://reqres.in/api/users/${action.data}`, callbackImpl)

  console.log(response)
  const data = [response.data]
  const pageNumber = 1

  let columns = []
  for (let columnName in data[0]){
    columns.push(columnName)
  }

  yield put({
    type: 'FETCHED_USER', data, pageNumber, columns
  })
}

 //GET RESOURCE LIST
 function* fetchResourceList(){
  const response = yield call(fetchData, 'https://reqres.in/api/unknown', callbackImpl)

  const data = response.data
  const pageNumber = response.page

  let columns = []
  for (let columnName in data[0]){
    columns.push(columnName)
  }

  yield put({
    type: 'FETCHED_RESOURCE_LIST', data, pageNumber, columns
  })

}

//GET SINGLE RESOURCE
function* fetchResource(action){
  const response = yield call(fetchData, `https://reqres.in/api/unknown/${action.data}`, callbackImpl)
  
  const data = [response.data]
  const pageNumber = 1

  let columns = []
  for (let columnName in data[0]){
    columns.push(columnName)
  }

  yield put({
    type: 'FETCHED_RESOURCE', data, pageNumber, columns
  })
}
