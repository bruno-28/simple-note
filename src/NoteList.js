const NoteList = ({ notes, title, handleDelete }) => {

  return (
    <div className="note-list">
      <h2>{title}</h2>
      {notes.map((note) => (
        <div className="note-preview" key={note.id}>
          <h2>{note.title}</h2>
          <p>Written by: {note.author}</p>
          <button onClick={() => handleDelete(note.id)}>Delete Note</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;