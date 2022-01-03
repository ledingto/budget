import React from 'react';
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries";

function EntryLine({ id, name, value, isExpense = false, editEntry }) {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{name}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" onClick={() => editEntry(id)} />
              <Icon name="trash" onClick={() => dispatch(removeEntryRedux(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default EntryLine;
