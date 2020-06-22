// import { fromJS } from 'immutable';
import { USERS_LIST, USERS_LIST_FULFILLED, SEARCH_USER_FULFILLED, REPO_DETAILS_FULFILLED } from "./constant";

const initialState = {
  list: [],
  details: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST:
      return { ...state };
    case USERS_LIST_FULFILLED:
      return { ...state, list: action.payload };
    case SEARCH_USER_FULFILLED:
      return { ...state, list: action.payload };
    case REPO_DETAILS_FULFILLED:  
      return {...state, details: action.payload}
    default:
      return state;
  }
};
