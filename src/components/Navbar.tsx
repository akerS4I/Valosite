import { Link } from "react-router";
import { useState } from "react";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Use boolean state

  return (
    <nav>
      <div className="container">
        <img src="/Valosite/Valorant_logo_cropped.png" alt="Logo" />
        <Link className="title" to="/">
          Valosite
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`menu ${menuOpen ? "change" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/news" className="nav_link">
          News
        </Link>
        <Link to="/rankings" className="nav_link">
          Rankings
        </Link>
        <Link to="/contact" className="nav_link">
          Contact me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
