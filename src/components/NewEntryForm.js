import React from 'react';
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry, clearEntry, name, value, isExpense, setName, setValue, setIsExpense }) {

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
