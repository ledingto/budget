export function openEditModal(id) {
  return { type: 'OPEN_EDIT_MODAL', payload: { id }};
}
export function closeEditModal() {
  return { type: 'CLOSE_EDIT_MODAL' };
}