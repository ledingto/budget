import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries";
import { v4 as uuidv4 } from "uuid";

export default function useEntryDetails() {
  const [ name, setName ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState(true);

  const dispatch = useDispatch();

  function addEntry() {
    dispatch(addEntryRedux({ id: uuidv4(), name, value, isExpense }));
    clearEntry();
  }

  function clearEntry() {
    setName('');
    setValue('');
    setIsExpense(true);
  }

  return { name, setName, value, setValue, isExpense, setIsExpense, addEntry, clearEntry };
};