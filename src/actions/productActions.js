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
