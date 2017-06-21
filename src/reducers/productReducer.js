const initialState = {
  data: [],
  isFetching: true,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS': return {...state, data: action.payload}
    default: return state;
  }
};

export const selectAllProducts = productsData => productsData.data;
