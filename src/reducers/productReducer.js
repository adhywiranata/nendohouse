const initialState = {
  data: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_LOADING': return { ...state, isFetching: true };
    case 'FETCH_PRODUCTS_SUCCESS': return { ...state, data: action.payload, isFetching: false };
    default: return state;
  }
};

// Selector to Map Category object to Products
const selectCategoryById = (categories, categoryId) => {
  const selectedIndex = categories.map(category => category.id).indexOf(categoryId);
  return categories[selectedIndex];
};
const mapCategoryToProduct = (product, categories) => (
  { ...product, category: selectCategoryById(categories, product.category_id) }
);
export const selectAllProducts = (productsData, categoriesData) => {
  const categories = categoriesData.data;
  return productsData.data.map(product => mapCategoryToProduct(product, categories));
};
