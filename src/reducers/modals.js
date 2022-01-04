import modalsTypes from "../actions/modals";

export default function modalsReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case modalsTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case modalsTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: "" }
    default:
      return state;
  };
};