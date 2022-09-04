import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("FETCH_USER", fetchUser);
    yield takeLatest("FETCH_USER_LIST", fetchUserList);

    yield takeLatest("FETCH_RESOURCE", fetchResource);
    yield takeLatest("FETCH_RESOURCE_LIST", fetchResourceList);

    yield takeLatest("POST_CREATE", postCreate);
    yield takeLatest("PUT_UPDATE", putUpdate);
  
    yield takeLatest("POST_REGISTER_SUCCESS", postRegisterSuccess)
    yield takeLatest("POST_REGISTER_FAILURE", postRegisterFailure)
  
    yield takeLatest("POST_LOGIN_SUCCESS", postLoginSuccess)
    yield takeLatest("POST_LOGIN_FAILURE", postLoginFailure)
    
  }
  
  const callbackImpl = (res) => res;
  
  function fetchData(url, callback){
   return fetch(url)
            .then(res => res.json())
            .then(res => callback(res))
  }

  //GET SINGLE USER
  function* fetchUser(){
    const response = yield call(fetchData, 'https://reqres.in/api/users/1', callbackImpl)
    
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

  //GET USER LIST
  function* fetchUserList(){
    const response = yield call(fetchData, 'https://reqres.in/api/users?page=1', callbackImpl)
  
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

  //GET SINGLE RESOURCE
  function* fetchResource(){
    const response = yield call(fetchData, 'https://reqres.in/api/unknown/1', callbackImpl)
    
    const data = response.data
    const pageNumber = response.page
  
    let columns = []
    for (let columnName in data[0]){
      columns.push(columnName)
    }
  
    yield put({
      type: 'FETCHED_RESOURCE', data, pageNumber, columns
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
      type: 'FETCHED_USER_LIST', data, pageNumber, columns
    })
  
  }

  function putData_Update(url, data, callback){
    return fetch(url, {
     method: 'PUT',
     body: JSON.stringify(data),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   })
     .then((response) => response.json())
     .then((json) => callback(json));
   }

//UPDATE - PUT - https://reqres.in/api/users/1
function* putUpdate(action){
    console.log("Check Post Create")
    console.log(action)
    const response = yield call(putData_Update, 'https://reqres.in/api/users/1', {name:action.name, job:action.job}, callbackImpl)
    console.log(response)
    const name = response.name
    const job = response.job
    const updatedAt = response.updatedAt
  
    yield put({
      type: 'PUT_UPDATED', name, job, updatedAt
    })
  }


  function postData_RegisterLogin(url, data, callback){
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

//CREATE - POST - https://reqres.in/api/users
function* postCreate(action){
    console.log("Check Post Create")
    console.log(action)
    const response = yield call(postData_RegisterLogin, 'https://reqres.in/api/users', {name:action.name, job:action.job}, callbackImpl)
    console.log(response)
    const name = response.name
    const job = response.job
    const id = response.id
    const createdAt = response.createdAt
  
    yield put({
      type: 'POST_CREATED', name, job, id, createdAt
    })
  }

  //REGISTER SUCCESSFULLY - POST - https://reqres.in/api/register
function* postRegisterSuccess(action){
    console.log("Check Post Register Success")
    console.log(action)
    const response = yield call(postData_RegisterLogin, 'https://reqres.in/api/register', {email:action.email, password:action.password}, callbackImpl)
    console.log(response)
    const id = response.id
    const token = response.token
  
    yield put({
      type: 'POST_REGISTERED_SUCCESS', id, token
    })
  }

  //REGISTER FAILURE - POST - https://reqres.in/api/register
function* postRegisterFailure(action){
    console.log("Check Post Register Failure")
    console.log(action)
    const response = yield call(postData_RegisterLogin, 'https://reqres.in/api/register', {email:action.email}, callbackImpl)
    console.log(response)
    const error = response.error
  
    yield put({
      type: 'POST_REGISTERED_FAILURE', error
    })
  }

  //LOGIN SUCCESSFULLY - POST - https://reqres.in/api/login
function* postLoginSuccess(action){
    console.log("Check Post Login Success")
    console.log(action)
    const response = yield call(postData_RegisterLogin, 'https://reqres.in/api/login', {email:action.email, password:action.password}, callbackImpl)
    console.log(response)
    const token = response.token
  
    yield put({
      type: 'POST_LOGGEDIN_SUCCESS', token
    })
  }
  
  //LOGIN FAILURE - POST - https://reqres.in/api/login
  function* postLoginFailure(action){
    console.log("Check Post Login Failure")
    console.log(action)
    const response = yield call(postData_RegisterLogin, 'https://reqres.in/api/login', {email:action.email}, callbackImpl)
    console.log(response)
    const error = response.error
  
    yield put({
      type: 'POST_LOGGEDIN_FAILURE', error
    })
  }

