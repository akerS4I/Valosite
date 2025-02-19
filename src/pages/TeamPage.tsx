import React from "react";
import { useParams, Link } from "react-router";
import { teamsData } from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/TeamPage.scss";

const TeamPage: React.FC = () => {
  const { teamName } = useParams<{ teamName: string }>();
  const team = teamsData.find((t) => t.name.toLowerCase() === decodeURIComponent(teamName!).toLowerCase());

  if (!team) {
    return <h1 className="not-found">Team not found</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="team-page">
        <div className="team-header">
          <img src={`/teams/${team.name.toLowerCase().replace(/\s+/g, "")}.png`} alt={team.name} className="team-logo" />
          <div className="team-info">
            <h1>{team.name}</h1>
            <p><strong>Region:</strong> {team.region}</p>
            <p><strong>Kickoff Placement:</strong> {team.kickoff_placement}</p>
          </div>
        </div>

        <h2 className="players-title">Players</h2>
        <div className="players-container">
          {team.players.map((player) => (
            <div key={player.nickname} className="player-card">
              <h3>{player.nickname}</h3>
              <p className="real-name">{player.name}</p>
              <p><strong>Role:</strong> {player.role}</p>
              <p><strong>Agents:</strong> {player.agents.join(", ")}</p>
              {player.IGL && <span className="igl-badge">IGL</span>}
            </div>
          ))}
        </div>

        <Link to="/" className="back-button">← Back to Teams</Link>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
