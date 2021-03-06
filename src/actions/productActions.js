import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from './constants';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsLoading = () => ({
  type: FETCH_PRODUCTS_LOADING,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailed = err => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: err,
});
