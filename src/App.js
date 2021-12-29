import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,550.00" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  { name: "Restaurant", value: "10.00", isExpense: true },
  { name: "Grocery", value: "44.00", isExpense: true },
  { name: "Paycheck", value: "2500.00", isExpense: false },
  { name: "Rent", value: "1000.00", isExpense: true },
]