import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries";
import { v4 as uuidv4 } from "uuid";

export default function useEntryDetails(n = '', val = '', isExp = true) {
  const [ name, setName ] = useState(n);
  const [ value, setValue ] = useState(val);
  const [ isExpense, setIsExpense ] = useState(isExp);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(n);
    setValue(val);
    setIsExpense(isExp);
  }, [n, val, isExp]);

  function updateEntry(id) {
    dispatch(updateEntryRedux({id, name, value, isExpense}));
  }

  function addEntry() {
    dispatch(addEntryRedux({ id: uuidv4(), name, value, isExpense }));
    clearEntry();
  }

  function clearEntry() {
    setName('');
    setValue('');
    setIsExpense(true);
  }

  return { name, setName, value, setValue, isExpense, setIsExpense, updateEntry, addEntry, clearEntry };
};