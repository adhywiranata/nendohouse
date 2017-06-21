import { all } from 'redux-saga/effects';

import { watchFetchProducts, watchFetchCategories } from './productSagas';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchCategories(),
  ]);
}
