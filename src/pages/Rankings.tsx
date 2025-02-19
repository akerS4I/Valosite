import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/Rankings.scss";

// Import ranking data
import euData from "../data/rankings-eu.json";
import naData from "../data/rankings-na.json";
import apData from "../data/rankings-ap.json";
import cnData from "../data/rankings-cn.json";
import krData from "../data/rankings-kr.json";
import brData from "../data/rankings-br.json";
import jpData from "../data/rankings-jp.json";

// Full region names mapping
const fullRegionNames: Record<string, string> = {
  eu: "Europe",
  na: "North America",
  ap: "Asia-Pacific",
  cn: "China",
  kr: "Korea",
  br: "Brazil",
  jp: "Japan",
};

// Store all data in an object
const rankingsDataMap: Record<string, { data: { rank: string; team: string; country: string; record: string; earnings: string; logo: string }[] }> = {
  eu: euData,
  na: naData,
  ap: apData,
  cn: cnData,
  kr: krData,
  br: brData,
  jp: jpData,
};

const Rankings: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const selectedRegion = region && rankingsDataMap[region] ? region : "eu";
  const regionName = fullRegionNames[selectedRegion] || "Unknown Region";

  // State for rankings
  const [rankings, setRankings] = useState(rankingsDataMap[selectedRegion].data);
  const [loading, setLoading] = useState(false);

  // Update rankings when region changes
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRankings(rankingsDataMap[selectedRegion].data);
      setLoading(false);
    }, 100); // Small delay to prevent flickering
  }, [selectedRegion]);

  return (
    <div>
      <Navbar />
      <div className="rankings-page">
        <h1>{regionName} Valorant Rankings</h1>

        {/* Region Navigation */}
        <div className="region-links">
          {Object.keys(rankingsDataMap).map((r) => (
            <Link key={r} to={`/rankings/${r}`} className={r === selectedRegion ? "active" : ""}>
              {fullRegionNames[r]}
            </Link>
          ))}
        </div>

        {/* Rankings List */}
        {loading ? (
          <p className="loading-text">Loading rankings...</p>
        ) : (
          <div className="rankings-container">
            {rankings.map((team) => (
              <div key={team.team} className="team-card">
                <div className="team-info">
                  <img src={team.logo} alt={team.team} className="team-logo" />
                  <div>
                    <h2>#{parseInt(team.rank)} {team.team}</h2>
                    <p className="team-country">{team.country}</p>
                    <p className="team-record">Record: {team.record}</p>
                    <p className="team-earnings">Earnings: {team.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Rankings;
