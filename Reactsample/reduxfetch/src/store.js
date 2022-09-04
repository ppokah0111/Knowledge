
import {createStore} from 'redux';
import Reducer from './Reducer'
import {apiMiddleware} from './Middleware'
import {applyMiddleware} from 'redux'

const store = createStore(Reducer, applyMiddleware(apiMiddleware));

export default store