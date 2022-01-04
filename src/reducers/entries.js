import entriesTypes from "../actions/entries";

export default function entriesReducer(state = [], action) {
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      const entriesWithAddition = state.concat(action.payload);
      return entriesWithAddition;
    case entriesTypes.REMOVE_ENTRY:
      const entriesWithRemoval = state.filter((entry) => entry.id !== action.payload.id);
      return entriesWithRemoval;
    case entriesTypes.UPDATE_ENTRY:
      const entriesWithUpdate = [...state];
      const index = entriesWithUpdate.findIndex((entry) => entry.id === action.payload.id);
      entriesWithUpdate[index] = action.payload;
      return entriesWithUpdate;
    default:
      return state;
  };
};