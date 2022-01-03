import React from 'react';
import EntryLine from "./EntryLine";

function EntryLines({ entries, editEntry }) {
  return (
    entries.map((entry,index) => {
        entry.id = index;
        return <EntryLine key={index} {...entry} editEntry={editEntry} />
    })
  )
}

export default EntryLines;
