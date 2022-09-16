const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Simple Note</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New note</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}
 
export default Navbar;