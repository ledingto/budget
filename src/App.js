import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import React, { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from "./actions/entries";

function App() {
  // Budget Totals
  const [ balance, setBalance ] = useState(0);
  const [ income, setIncome ] = useState(0);
  const [ expenses, setExpenses ] = useState(0);

  // Entry Lines and Modal
  const entries = useSelector(state => state.entries);
  const { isOpen, id } = useSelector(state => state.modals);
  const [ selectedEntry, setSelectedEntry ] = useState();

  const dispatch = useDispatch();

  // Populate History on App Start
  useEffect(() => {
    dispatch(getAllEntries());
  }, [])

  // Update Entry Based on Modal Input
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setSelectedEntry(entries[index]);
  }, [isOpen]);

  // Income, Expenses, and Budget Calculations
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

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value={balance} size="small" />

      <DisplayBalances income={income} expenses={expenses} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...selectedEntry} />
    </Container>
  );
}

export default App;