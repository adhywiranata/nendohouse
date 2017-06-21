import {
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from '../actions/constants';

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_LOADING: return { ...state, isFetching: true };
    case FETCH_CATEGORIES_SUCCESS: return { ...state, data: action.payload, isFetching: false };
    default: return state;
  }
};

export const selectAllCategories = categoriesData => categoriesData.data;
