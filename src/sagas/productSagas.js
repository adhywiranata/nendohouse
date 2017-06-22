import { put, call, takeEvery } from 'redux-saga/effects';
import database from '../database';

import { FETCH_PRODUCTS } from '../actions/constants';
import { fetchProductsLoading, fetchProductsSuccess, fetchProductsFailed } from '../actions/productActions';

const selectCategoryById = (categories, categoryId) => {
  const selectedIndex = categories.map(category => category.id).indexOf(categoryId);
  return categories[selectedIndex];
};

const mapCategoryToProduct = (products, categories) => (
  products.map(product => (
    { ...product, category: selectCategoryById(categories, product.category_id) }
  ))
);

const getProductsFromFirebase = () => {
  return database.ref('products').once('value').then((productsSnapshot) => {
    return database.ref('categories').once('value').then((categorySnapshot) => {
      return mapCategoryToProduct(productsSnapshot.val(), categorySnapshot.val());
    });
  });
};

function* fetchProducts() {
  yield put(fetchProductsLoading());
  try {
    const data = yield call(getProductsFromFirebase);
    yield put(fetchProductsSuccess(data));
  } catch (e) {
    yield put(fetchProductsFailed(e));
  }
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
