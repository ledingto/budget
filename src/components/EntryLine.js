import React from 'react';
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries";
import { openEditModal } from "../actions/modals";

function EntryLine({ id, name, value, isExpense }) {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{name}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" onClick={() => dispatch(openEditModal(id))} />
              <Icon name="trash" onClick={() => dispatch(removeEntryRedux(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default EntryLine;
