import React from 'react';
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, id, name, value, isExpense }) {
  const dispatch = useDispatch();
  const entry = useEntryDetails(name, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm name={entry.name} setName={entry.setName}
                   value={entry.value} setValue={entry.setValue}
                   isExpense={entry.isExpense} setIsExpense={entry.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>dispatch(closeEditModal())}>Close</Button>
        <Button onClick={()=>{
          entry.updateEntry(id);
          dispatch(closeEditModal());
        }} primary>Save</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit;
