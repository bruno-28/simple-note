import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Note</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New note</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
