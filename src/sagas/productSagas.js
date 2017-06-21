import { put, call, takeEvery } from 'redux-saga/effects';
import database from '../database';

import { FETCH_PRODUCTS } from '../actions/constants';
import { fetchProductsLoading, fetchProductsSuccess, fetchProductsFailed } from '../actions/productActions';

const connectDB = () => {
  return database.ref('products').once('value').then((snapshot) => {
    return snapshot.val();
  });
};

function* fetchProducts() {
  yield put(fetchProductsLoading());
  try {
    const data = yield call(connectDB);
    yield put(fetchProductsSuccess(data));
  } catch (e) {
    yield put(fetchProductsFailed(e));
  }
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
