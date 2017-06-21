import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from './constants';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchCategoriesLoading = () => ({
  type: FETCH_CATEGORIES_LOADING,
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailed = err => ({
  type: FETCH_CATEGORIES_FAILED,
  payload: err,
});
