import {
  SET_HEADER_SEARCH_KEYWORD,
} from './constants';

export const setHeaderSearchKeyword = searchKeyword => ({
  type: SET_HEADER_SEARCH_KEYWORD,
  payload: searchKeyword,
});
