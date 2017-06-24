import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import headerSearchReducer from './headerSearchReducer';

export default combineReducers({
  products: productReducer,
  categories: categoryReducer,
  headerSearch: headerSearchReducer,
  router: routerReducer,
});
