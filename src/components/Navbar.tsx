import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src="/Valorant_logo_cropped.png" alt="" />
        <a className="title" href="/">
          Valosite
        </a>
      </div>
      <div className="links">
        <a href="/news">News</a>
        <a href="/rankings">Rankings</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
