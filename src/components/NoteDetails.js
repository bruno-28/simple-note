import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const NoteDetails = () => {
  //const url = "http://localhost:8000/notes/";
  const url = "http://localhost:4000/api/notes/";
  
  const { id } = useParams();
  console.log(id);
  const {
    data: note,
    isPending,
    error,
  } = useFetch(url + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(url + id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }

  return (
    <div className="note-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {note && (
        <article>
          <h2>{note.title}</h2>
          <p>Written by {note.author}</p>
          <div>{note.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default NoteDetails;
