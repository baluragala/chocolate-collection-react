import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
//import logger from 'redux-logger'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

let sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;