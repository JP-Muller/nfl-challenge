import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getGameDays } from "../../helperFunctions";
import {getGameData,getTeamData,getGamesByWeek} from "../../Redux/Reducers/gameDataReducer";
import ListItem from "../ListItem/ListItem";
import Dropdown from "../Dropdown/Dropdown";
import "./Dashboard.css";

//This component will hold and display the data for each week of the regular NFL season along with filter options for the data.

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateAscending: true,
      currentGameDays: [],
      excludedDays: []
    };
  }

  changeDateFilter = () => {
    let { dateAscending } = this.state;
    this.setState({ dateAscending: !dateAscending });
  };

  excludeDay = day => {
    const { excludedDays } = this.state;
    if (!excludedDays.includes(day)) {
      this.setState({
        excludedDays: [...excludedDays, day]
      });
    } else {
      let index = excludedDays.indexOf(day);
      let newlyExcluded = [...excludedDays];
      if (index !== -1) {
        newlyExcluded.splice(index, 1);
        this.setState({ excludedDays: newlyExcluded });
      }
    }
  };

  setCurrentGameDays = () => {
    let { gameData } = this.props.games;
    if (gameData.length) {
      this.setState({
        currentGameDays: getGameDays(gameData)
      });
    }
  };

  async componentDidMount() {
    this._ismounted = true
    await this.props.getGameData();
    this.props.getTeamData();
    this.setCurrentGameDays();
  }

  componentDidUpdate(prevProps) {
    let { gameData } = this.props.games;
    if (gameData.length && gameData !== prevProps.games.gameData && this._ismounted) {
      this.setCurrentGameDays();
    }
  }

  componentWillUnmount = () => {
    this._ismounted = false;
  }

  render() {
    let { dateAscending, currentGameDays, excludedDays } = this.state;
    let { user } = this.props.user;
    let { gameData, teamData } = this.props.games;
    if (!user.loggedIn) return <Redirect to="/login" />;
    return (
      <main id="dash-master">
        <section id="header-filter-container">
          {gameData && gameData.length ? (
            <h3>Week {gameData[0].Week}</h3>
          ) : null}
          <section id="current-days">
            {/*Provides buttons for each game day of the current NFL week, click to hide/show games for the selected day */}
            {currentGameDays.map(day => {
              return (
                <button
                  className={
                    excludedDays.includes(day)
                      ? "day-button deselected"
                      : "day-button"
                  }
                  key={day}
                  onClick={() => this.excludeDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </section>
          <Dropdown
            changeDateFilter={this.changeDateFilter}
            dateAscending={this.state.dateAscending}
            getGamesByWeek={this.props.getGamesByWeek}
          />
        </section>
        <section className="list-container" id={dateAscending ? "" : "descend"}>
          {gameData && gameData.length && excludedDays.length < 1 ? (
            gameData.map((game, i) => {
              return (
                <ListItem gameData={gameData[i]} teamData={teamData} key={i} />
              );
            })
          ) : gameData && gameData.length && excludedDays.length ? (
            gameData.map((game, i) => {
              if (
                !excludedDays.includes(
                  new Date(game.DateTime).toString().split(" ")[0]
                )
              ) {
                return (
                  <ListItem
                    gameData={gameData[i]}
                    teamData={teamData}
                    key={i}
                  />
                );
              } else return null;
            })
          ) : (
            <h2>Nothing to show!</h2>
          )}
        </section>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    games: state.games
  };
}

export default connect(mapStateToProps, {
  getGameData,
  getTeamData,
  getGamesByWeek
})(Dashboard);
