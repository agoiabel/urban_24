import rootSaga from './root.saga';
import rootReducer from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;