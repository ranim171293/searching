import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createReducer from './Reducer/index'
// import logger from 'redux-logger';




const store = createStore(createReducer(), {}, applyMiddleware(thunk));

export default store