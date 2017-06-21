import { all } from 'redux-saga/effects';

import { watchFetchProducts } from './productSagas';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
  ]);
}
