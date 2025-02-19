import { Link } from "react-router";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src="/Valosite/Valorant_logo_cropped.png" alt="" />
        <Link className="title" to="/">
          Valosite
        </Link>
      </div>
      <div className="links">
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
