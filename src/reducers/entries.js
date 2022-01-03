export default function entriesReducer(state = initialEntries, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      const entriesWithAddition = state.concat(action.payload);
      return entriesWithAddition;
    case 'REMOVE_ENTRY':
      const entriesWithRemoval = state.filter((entry) => entry.id !== action.payload.id);
      return entriesWithRemoval;
    default:
      return state;
  };
};

const initialEntries = [
  { id: "0", name: "Restaurant", value: "10.00", isExpense: true },
  { id: "1", name: "Grocery", value: "44.00", isExpense: true },
  { id: "3", name: "Paycheck", value: "2500.00", isExpense: false },
  { id: "4", name: "Rent", value: "1000.00", isExpense: true },
]