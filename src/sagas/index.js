import { all } from 'redux-saga/effects';

import { watchFetchProducts } from './productSagas';
import { watchFetchCategories } from './categorySagas';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchCategories(),
  ]);
}
