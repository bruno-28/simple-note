import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h2>Add a new note</h2>
      <form>
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
        <button onClick={(e) => handleClick(e)}>Add Note</button>
      </form>
    </div>
  );
};

export default Create;
