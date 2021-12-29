import React, { useState } from 'react';
import { Form, Segment, Checkbox } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
  const [ name, setName ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState(true);

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags" width={12} label="Name"
          placeholder="New item" value={name} onChange={(event)=>setName(event.target.value)} />
        <Form.Input
          icon="dollar" iconPosition="left" width={4} label="Price"
          placeholder="0.00" value={value} onChange={(event)=>setValue(event.target.value)} />
      </Form.Group>
      <Segment compact>
        <Checkbox label="Expense" checked={isExpense} onChange={()=>setIsExpense(!isExpense)} />
      </Segment>
      <ButtonSaveOrCancel addEntry={addEntry} name={name} value={value} isExpense={isExpense} />
    </Form>
  )
}

export default NewEntryForm;
