import React from 'react';
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry, clear, name, value, isExpense }) {
  function save() {
    addEntry(name, value, isExpense);
    clear();
  }

  return (
    <Button.Group style={{marginTop: 20}}>
      <Button onClick={()=>clear()}>Cancel</Button>
      <Button.Or />
      <Button primary onClick={()=>save()}>Save</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel;
