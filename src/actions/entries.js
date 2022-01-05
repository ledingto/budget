const types = {
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES',
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  UPDATE_ENTRY: 'UPDATE_ENTRY'
}
export default types;

export function getAllEntries() {
  return { type: types.GET_ENTRIES }
}
export function populateEntries(payload) {
  return { type: types.POPULATE_ENTRIES, payload }
}
export function addEntryRedux(payload) {
  return { type: types.ADD_ENTRY, payload };
}
export function removeEntryRedux(id) {
  return { type: types.REMOVE_ENTRY, payload: { id } }
}
export function updateEntryRedux(payload) {
  return { type: types.UPDATE_ENTRY, payload }
}