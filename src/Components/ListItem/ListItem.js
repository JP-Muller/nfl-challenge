import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherIcon, getStandardTime } from "../../helperFunctions";
import "./ListItem.css";

function ListItem(props) {
  const [homeSelected, toggleHome] = React.useState(false);
  const [awaySelected, toggleAway] = React.useState(false);
  const { gameData, teamData } = props;

  useEffect(() => {
    toggleHome(false);
    toggleAway(false);
  }, [gameData]);

  function getTeamNames() {
    let homeTeam = {};
    let awayTeam = {};
    teamData.forEach(team => {
      if (team.Key === gameData.HomeTeam) {
        homeTeam.name = team.FullName;
        homeTeam.teamLogo = team.WikipediaLogoUrl;
      }
      if (team.Key === gameData.AwayTeam) {
        awayTeam.name = team.FullName;
        awayTeam.teamLogo = team.WikipediaLogoUrl;
      }
    });
    return (
      <div className="first-column">
        {!homeSelected && !awaySelected ? (
          <div className="selected-winner">Pick your expected winner!</div>
        ) : (
          <div className="selected-winner">
            <p>Your expected winner: </p>
            <b> {homeSelected ? ` ${homeTeam.name}` : ` ${awayTeam.name}`}</b>
          </div>
        )}
        <section className="team-section">
          <div
            className={
              homeSelected
                ? "home-team-container selected"
                : awaySelected
                ? "home-team-container expected-loser"
                : "home-team-container"
            }
            onClick={() => toggleSelected("home")}
          >
            <i className="fas fa-home"></i>
            <img src={homeTeam.teamLogo} alt="Home Team Logo" />
            <p>{homeTeam.name}</p>
          </div>
          <h5>VS.</h5>
          <div
            className={
              awaySelected
                ? "away-team-container selected"
                : homeSelected
                ? "away-team-container expected-loser"
                : "away-team-container"
            }
            onClick={() => toggleSelected("away")}
          >
            <img src={awayTeam.teamLogo} alt="Away Team Logo" />
            <p>{awayTeam.name}</p>
          </div>
        </section>
      </div>
    );
  }

  function toggleSelected(team) {
    if (!homeSelected && !awaySelected) {
      if (team === "home") toggleHome(true);
      else if (team === "away") toggleAway(true);
    }
    if (team === "home" && awaySelected) {
      toggleAway(!awaySelected);
      toggleHome(true);
    } else if (team === "away" && homeSelected) {
      toggleHome(!homeSelected);
      toggleAway(true);
    }
  }

  return (
    <div className="item-master">
      {getTeamNames()}
      <section className="item-mid-section">
        <div className="game-info-text">
          <b>Stadium: </b>
          <p> {gameData.StadiumDetails.Name}</p>
        </div>
        <div className="game-info-text">
          <b>City/State: </b>
          <p>
            {`${gameData.StadiumDetails.City}, ${gameData.StadiumDetails.State}`}
          </p>
        </div>
        <div className="game-info-text">
          <b>Date/Time: </b>
          <p>
            {new Date(gameData.DateTime)
              .toString()
              .split(" ")
              .splice(0, 4)
              .join(" ")}{" "}
            {getStandardTime(gameData.DateTime)}
          </p>
        </div>
      </section>
      <section className="weather-section">
        <div id="icon-and-temp">
          {getWeatherIcon(gameData.ForecastDescription)}
          {(gameData.ForecastTempLow + gameData.ForecastTempHigh) / 2}°F
        </div>
        <p>{gameData.ForecastDescription}</p>
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    games: state.games
  };
}

export default connect(mapStateToProps)(ListItem);
