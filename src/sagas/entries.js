import { take, call, put } from "redux-saga/effects";
import entriesTypes from "../actions/entries";
import { populateEntries } from "../actions/entries";
import axios from "axios";

export function* populateEntriesFromDB() {
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(result.data));
}

export function* addEntryToDB() {
  const { payload } = yield take(entriesTypes.ADD_ENTRY);
  yield call(axios.post, "http://localhost:3001/entries", payload);
}

export function* deleteEntryFromDB() {
  const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
  yield call(axios.delete, `http://localhost:3001/entries/${payload.id}`);
}

export function* updateEntryInDB() {
  const { payload } = yield take(entriesTypes.UPDATE_ENTRY);
  yield call(axios.put, `http://localhost:3001/entries/${payload.id}`, payload);
}