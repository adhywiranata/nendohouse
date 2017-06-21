import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
