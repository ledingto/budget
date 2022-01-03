import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries";

export default function configureStore() {
  return createStore(combineReducers({
    entries: entriesReducer,
  }));
};
