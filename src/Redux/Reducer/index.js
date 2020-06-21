import {
  combineReducers
} from 'redux';
import main from "./main"



export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    main
  });
  return rootReducer
}