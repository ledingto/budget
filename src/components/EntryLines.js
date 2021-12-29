import React from 'react';
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry }) {
  return (
    entries.map((entry,index) => {
        entry.id = index;
        return <EntryLine key={index} {...entry} deleteEntry={deleteEntry} />
    })
  )
}

export default EntryLines;
