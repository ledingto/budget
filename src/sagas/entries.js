import { take, call, put } from "redux-saga/effects";
import entriesTypes from "../actions/entries";
import { populateEntries } from "../actions/entries";
import axios from "axios";

export function* getAndPopulateEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(result.data));
}