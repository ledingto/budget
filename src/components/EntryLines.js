import React from 'react';
import EntryLine from "./EntryLine";

function EntryLines({ entries }) {
  return (
    entries.map((entry,index) => {
        return <EntryLine key={index} entry={entry} />
    })
  )
}

export default EntryLines;
