import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import allReducer from "./reducer/combineReducers";

// const REDUX_DEVTOOL =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const InitialState = {
  employee: [],
};

const middleware = [thunk];
const store = createStore(allReducer, InitialState, compose(applyMiddleware(...middleware)));

export default store;