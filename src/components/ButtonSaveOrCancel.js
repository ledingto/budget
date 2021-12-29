import React from 'react';
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry, clearEntry }) {

  return (
    <Button.Group style={{marginTop: 20}}>
      <Button onClick={()=>clearEntry()}>Cancel</Button>
      <Button.Or />
      <Button primary onClick={()=>addEntry()}>Save</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel;
