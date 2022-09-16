import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const note = { title, body, author };

    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      console.log("new note added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label>Note title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>Note body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Note author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        ></input>
        {!isPending ? (<button>Add Note</button>) : (<button disabled>Adding note...</button>)}
      </form>
    </div>
  );
};

export default Create;
