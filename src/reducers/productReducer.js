import {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from '../actions/constants';

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING: return { ...state, isFetching: true };
    case FETCH_PRODUCTS_SUCCESS: return { ...state, data: action.payload, isFetching: false };
    case FETCH_PRODUCTS_FAILED: return { ...state, isFetching: false, isError: false };
    default: return state;
  }
};

export const selectAllProducts = productsData => productsData.data;
export const selectProductsBySearchKeyword = (productsData, searchKeyword) => {
  return productsData.data.filter(product => product.name.includes(searchKeyword));
};
export const selectProductsByCategory = (productsData, categoryName) => {
  return productsData.data.filter((product) => {
    return product.category.name.toLowerCase() === categoryName.toLowerCase();
  });
};
