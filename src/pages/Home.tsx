import "../styles/pages/Home.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page-title">View Teams Attending VCT Masters Bangkok</div>
      <div className="teams_container">
        <div className="grid_container">
          <div className="region_container">
            <h1>Americas</h1>
            <div className="logo_container">
              <Link to="/teams/G2"className="team_wrapper">
                <img src="/teams/g2.png" alt="G2" />
                <h2>G2</h2>
              </Link>
              <Link to="/teams/SEN"className="team_wrapper">
                <img src="/teams/sen.png" alt="SENTINELS" />
                <h2>Sentinels</h2>
              </Link>
            </div>
          </div>
          <div className="region_container">
            <h1>China</h1>
            <div className="logo_container">
              <Link to="/teams/EDG"className="team_wrapper">
                <img src="/teams/edg.png" alt="EDG" />
                <h2>EDG</h2>
              </Link>
              <Link to="/teams/TE"className="team_wrapper">
                <img src="/teams/te.png" alt="Trace Esports" />
                <h2>Trace Esports</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid_container">
          <div className="region_container">
            <h1>EMEA</h1>
            <div className="logo_container">
              <Link to="/teams/VIT"className="team_wrapper">
                <img src="/teams/vit.png" alt="Vitality" />
                <h2>Team Vitality</h2>
              </Link>
              <Link to="/teams/TL"className="team_wrapper">
                <img src="/teams/tl.png" alt="Team Liquid" />
                <h2>Team Liquid</h2>
              </Link>
            </div>
          </div>
          <div className="region_container">
            <h1>Pacific</h1>
            <div className="logo_container">
              <Link to="/teams/DRX"className="team_wrapper">
                <img src="/teams/drx.png" alt="DRX" /><h1></h1>
                <h2>DRX</h2>
              </Link>
              <Link to="/teams/T1"className="team_wrapper">
                <img src="/teams/t1.png" alt="T1" />
                <h2>T1</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
