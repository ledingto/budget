import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries";

function NewEntryForm() {

  const [ name, setName ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState(true);

  const dispatch = useDispatch();

  function addEntry() {
    dispatch(addEntryRedux({ id: '', name, value, isExpense }));
    clearEntry();
  }

  function clearEntry() {
    setName('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Form unstackable>
      <EntryForm name={name} setName={setName}
                 value={value} setValue={setValue}
                 isExpense={isExpense} setIsExpense={setIsExpense} />
      <ButtonSaveOrCancel addEntry={addEntry} clearEntry={clearEntry} name={name} value={value} />
    </Form>
  )
}

export default NewEntryForm;
