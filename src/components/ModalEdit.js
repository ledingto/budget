import React from 'react';
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({ isOpen, setIsOpen, name, value, isExpense, setName, setValue, setIsExpense }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm name={name} setName={setName}
                   value={value} setValue={setValue}
                   isExpense={isExpense} setIsExpense={setIsExpense} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>setIsOpen(false)}>Close</Button>
        <Button onClick={()=>setIsOpen(false)} primary>Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit;
