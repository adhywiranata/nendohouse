import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  products: productReducer,
  categories: categoryReducer,
  router: routerReducer,
});
