import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src="public\Valorant_logo_cropped.png" alt="" />
        <a className="title" href="/">
          Valosite
        </a>
      </div>
      <div className="links">
        <a href="/news">News</a>
        <a href="/predictions">Predictions</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
