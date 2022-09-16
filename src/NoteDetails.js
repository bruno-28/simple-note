import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NoteDetails = () => {
  const { id } = useParams();
  const {
    data: note,
    isPending,
    error,
  } = useFetch("http://localhost:8000/notes/" + id);

  return (
    <div className="note-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {note && (
        <article>
          <h2>{note.title}</h2>
          <p>Written by {note.author}</p>
          <div>{note.body}</div>
        </article>
      )}
    </div>
  );
};

export default NoteDetails;
