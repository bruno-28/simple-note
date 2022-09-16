import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NoteDetails from "./NoteDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/notes/:id" element={<NoteDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
