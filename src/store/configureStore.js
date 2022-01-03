import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries";

export default function configureStore() {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    }),
    composeWithDevTools()
  );
};
