import React from 'react';
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry, name, value, isExpense }) {
  return (
    <Button.Group style={{marginTop: 20}}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={()=>addEntry(name, value, isExpense)}>Save</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel;
