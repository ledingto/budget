export function addEntryRedux(payload) {
  return { type: 'ADD_ENTRY', payload };
}
export function removeEntryRedux(id) {
  return { type: 'REMOVE_ENTRY', payload: { id } }
}
export function updateEntryRedux(payload) {
  return { type: 'UPDATE_ENTRY', payload: payload }
}