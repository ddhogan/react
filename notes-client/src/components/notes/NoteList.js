//note lists presentational component

import React from 'react';

const NoteList = (props) => {

  const notes = props.notes.map((note, index) => {
    return (
      <div className="NoteCard" key={note.id}>
        <h4> {note.content}</h4>
      </div>
    )
  })

    return (
      <div className="NoteContainer">
        <h4> Your Notes </h4>
        {notes}
      </div>
    )
  }

export default NoteList;
