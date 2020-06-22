import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createReducer from "./Reducer/index";
import logger from "redux-logger";

const store = createStore(createReducer(), {}, applyMiddleware(logger, thunk));

export default store;
