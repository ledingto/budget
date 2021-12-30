import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import React, { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  // Budget Totals
  const [ balance, setBalance ] = useState(0);
  const [ income, setIncome ] = useState(0);
  const [ expenses, setExpenses ] = useState(0);

  // Entry Lines
  const [entries, setEntries] = useState(initialEntries);

  // Entry Form
  const [ id, setId ] = useState('');
  const [ name, setName ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState(true);

  // Modal
  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    let incomeTotal = 0, expenseTotal = 0;
    entries.forEach(entry => {
      if (entry.isExpense) {
        expenseTotal += parseFloat(entry.value);
      } else {
        incomeTotal += parseFloat(entry.value);
      }
    });

    setExpenses(expenseTotal);
    setIncome(incomeTotal);
  }, [entries]);

  useEffect(() => {
    setBalance(income - expenses);
  }, [income, expenses])

  useEffect(() => {
    if (!isOpen && id !== '') {
      let result = [...entries];
      result[id].name = name;
      result[id].value = value;
      result[id].isExpense = isExpense;
      setEntries(result);
      clearEntry();
    }
  }, [isOpen]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    if(id !== '') {
      const entry = entries.filter((entry) => entry.id === id)[0];
      setId(entry.id);
      setName(entry.name);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({name, value, isExpense});
    setEntries(result);
    clearEntry();
  }

  function clearEntry() {
    setId('')
    setName('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value={balance} size="small" />

      <DisplayBalances income={income} expenses={expenses} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} clearEntry={clearEntry}
                    name={name} setName={setName}
                    value={value} setValue={setValue}
                    isExpense={isExpense} setIsExpense={setIsExpense} />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
                 name={name} setName={setName}
                 value={value} setValue={setValue}
                 isExpense={isExpense} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;

const initialEntries = [
  { name: "Restaurant", value: "10.00", isExpense: true },
  { name: "Grocery", value: "44.00", isExpense: true },
  { name: "Paycheck", value: "2500.00", isExpense: false },
  { name: "Rent", value: "1000.00", isExpense: true },
]