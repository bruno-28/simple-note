import NoteList from "./NoteList";
import useFetch from "./hooks/useFetch";

const Home = () => {
  //const url = "http://localhost:8000/notes";
  const url = "http://localhost:4000/api/notes";

  const { data: notes, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading data...</h1>}
      {notes && <NoteList notes={notes} title={"All notes!"} />}
    </div>
  );
};

export default Home;
