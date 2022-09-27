import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import NoteDetails from "./components/NoteDetails";

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
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
