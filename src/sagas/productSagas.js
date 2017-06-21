import { put, takeEvery } from 'redux-saga/effects';
import database from '../database';

import { FETCH_PRODUCTS } from '../actions/constants';
import { fetchProductsLoading, fetchProductsSuccess } from '../actions/productActions';

function* fetchProducts() {
  yield put(fetchProductsLoading());
  console.log('called fetchProducts saga!');
  try {
    const data = yield database.ref('products').once('value').then((snapshot) => {
      return snapshot.val();
    });
    yield put(fetchProductsSuccess(data));
  } catch(e) {
    // yield put()
  }
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
