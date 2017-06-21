import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const routerWithHistoryMiddleware = routerMiddleware(createHistory());

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, routerWithHistoryMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
