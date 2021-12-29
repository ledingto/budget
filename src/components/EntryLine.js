import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";


function EntryLine({ id, name, value, isExpense = false, deleteEntry }) {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">{name}</Grid.Column>
          <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
          <Grid.Column width={3} textAlign="center">
            <Icon name="edit" />
            <Icon name="trash" onClick={() => deleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default EntryLine;
