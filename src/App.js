import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import React, { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

import { useSelector } from 'react-redux';

function App() {
  // Budget Totals
  const [ balance, setBalance ] = useState(0);
  const [ income, setIncome ] = useState(0);
  const [ expenses, setExpenses ] = useState(0);

  // Entry Lines
  const entries = useSelector(state => state.entries);

  // Entry Form
  // duplicated (used by modal and entry form)
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
      // setEntries(result);
      clearEntry();
    }
  }, [isOpen]);

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

  // duplicated (used by modal and entry form)
  function clearEntry() {
    setId('');
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
      <EntryLines entries={entries} editEntry={editEntry} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
                 name={name} setName={setName}
                 value={value} setValue={setValue}
                 isExpense={isExpense} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;