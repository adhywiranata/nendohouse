import {
  SET_HEADER_SEARCH_KEYWORD,
} from '../actions/constants';

const initialState = {
  searchKeyword: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_SEARCH_KEYWORD: return { ...state, searchKeyword: action.payload };
    default: return state;
  }
};
