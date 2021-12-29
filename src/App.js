import { Container, Segment, Grid, Icon, } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,550.00" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine name='Restaurant' value='10.00' isExpense />
      <EntryLine name='Grocery' value='44.00' isExpense />
      <EntryLine name='Paycheck' value='2500.00' />
      <EntryLine name='Rent' value='1000.00' isExpense />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
