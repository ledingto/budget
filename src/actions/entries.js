const types = {
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  UPDATE_ENTRY: 'UPDATE_ENTRY'
}
export default types;

export function addEntryRedux(payload) {
  return { type: types.ADD_ENTRY, payload };
}
export function removeEntryRedux(id) {
  return { type: types.REMOVE_ENTRY, payload: { id } }
}
export function updateEntryRedux(payload) {
  return { type: types.UPDATE_ENTRY, payload: payload }
}