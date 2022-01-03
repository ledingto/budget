export default function entriesReducer(state = initialEntriesCopy, action) {
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

const initialEntriesCopy = [
  { name: "Restaurant", value: "10.00", isExpense: true },
  { name: "Grocery", value: "44.00", isExpense: true },
  { name: "Paycheck", value: "2500.00", isExpense: false },
  { name: "Rent", value: "1000.00", isExpense: true },
]