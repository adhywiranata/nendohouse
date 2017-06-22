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
  console.log(productsData.data);
  return productsData.data.map(product => product);
};

export const selectProductsByCategory = (productsData, categoriesData, categoryName) => {
  const categories = categoriesData.data;
  return productsData.data
    .map(product => mapCategoryToProduct(product, categories))
    .filter((product) => {
      // products will fetched first before category, so when product category is empty,
      // we automatically returns false first and then wait until changes to the category is done.
      if (product.category) {
        return product.category.name.toLowerCase() === categoryName.toLowerCase();
      }
      return false;
    });
};
