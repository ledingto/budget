import React from 'react';
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    entries.map((entry,index) => {
        entry.id = index;
        return <EntryLine key={index} {...entry} deleteEntry={deleteEntry} editEntry={editEntry} />
    })
  )
}

export default EntryLines;
