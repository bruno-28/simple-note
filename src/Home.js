import { useState } from "react";
import NoteList from "./NoteList";

const Home = () => {
    const [notes, setNotes] = useState([
        { title: 'Shopping List', body: 'lorem ipsum...', author: 'John', id: 1 },
        { title: 'TODO List', body: 'lorem ipsum...', author: 'John', id: 2 },
        { title: 'Movie List', body: 'lorem ipsum...', author: 'John', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newNotes = notes.filter((note) => {return note.id !== id});
        setNotes(newNotes);
    }

    return (
        <div className="home">
            <NoteList notes={notes} title={'All notes!'} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;