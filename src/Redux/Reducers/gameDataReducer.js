import axios from "axios";
import { GET_GAME_DATA, GET_TEAM_DATA } from "../actionTypes";

const initialState = {
    gameData: [],
    teamData: [],
    loading: false
}

export const getGameData = () => {
    let data = axios
    .get('https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019REG/1?key=9f22f33c57664e878b48110a1e5449bc')
    .then(res => res.data)
    return {
        type: GET_GAME_DATA,
        payload: data
    }
}

export const getGamesByWeek = (week) => {
    let data = axios
    .get(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019REG/${week}?key=9f22f33c57664e878b48110a1e5449bc`)
    .then(res => res.data)
    return {
        type: GET_GAME_DATA,
        payload: data
    }
}

export const getTeamData = () => {
    let data = axios
    .get('https://api.sportsdata.io/v3/nfl/scores/json/Teams/2019REG?key=9f22f33c57664e878b48110a1e5449bc')
    .then(res => res.data)
    return {
        type: GET_TEAM_DATA,
        payload: data
    }
}

export default function(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case GET_GAME_DATA + '_FULFILLED':
            return {
                ...state,
                gameData: payload,
                loading: false
            }
        case GET_GAME_DATA + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case GET_TEAM_DATA + "_FULFILLED":
            return {
                ...state,
                teamData: payload
            }
      default:
        return state;
    }
  }
  