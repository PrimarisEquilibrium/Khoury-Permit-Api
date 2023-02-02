import "../styles/navbar.css"

function Navbar({active}) {
  return (
    <nav className="nav">
      <div className="logo">LOGO</div>
      <div className="nav-options">
        {active === "home" ? <a href="/" className="nav-btn active">Home</a> : <a href="/" className="nav-btn">Home</a>}
        {active === "contact" ? <a href="/contact" className="nav-btn active">Contact</a> : <a href="/contact" className="nav-btn">Contact</a>}
      </div>
    </nav>
  );
}

export default Navbar;
