const initialState = {
  data: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, action) => {
  return state;
};

export const selectAllProducts = productsData => productsData.data;
