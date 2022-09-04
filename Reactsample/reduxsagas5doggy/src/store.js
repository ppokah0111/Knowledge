import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Reducer from "./Reducer";
import { watcherSaga } from "./middleware";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
//This needs to be done since watcheSaga is a generator
sagaMiddleware.run(watcherSaga);

export default store;
