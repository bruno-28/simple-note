import { Link } from "react-router-dom";

const NoteList = ({ notes, title }) => {
  return (
    <div className="note-list">
      <h1>{title}</h1>
      {notes.map((note) => (
        <div className="note-preview" key={note._id}>
          <Link to={`/notes/${note._id}`}>
            <h2>{note.title}</h2>
            <p>Written by: {note.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
