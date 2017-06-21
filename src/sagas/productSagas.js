import { put, call, takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS } from '../actions/constants';
import { fetchProductsLoading } from '../actions/productActions';

function* fetchProducts() {
  yield put(fetchProductsLoading());
  // try {
  // } catch(e) {
  //   // yield put()
  // }
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
