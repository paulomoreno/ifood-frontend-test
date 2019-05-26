import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, multi,promise));
  return store;
}