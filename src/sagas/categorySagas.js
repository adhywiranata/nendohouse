import { put, call, takeEvery } from 'redux-saga/effects';
import database from '../database';

import { FETCH_CATEGORIES } from '../actions/constants';
import {
  fetchCategoriesLoading,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../actions/productActions';

const fetchAllCategories = () => (
  database.ref('categories').once('value').then(snapshot => snapshot.val())
);

function* fetchCategories() {
  yield put(fetchCategoriesLoading());
  try {
    const data = yield call(fetchAllCategories);
    yield put(fetchCategoriesSuccess(data));
  } catch (e) {
    yield put(fetchCategoriesFailed(e));
  }
}

export function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategories);
}
