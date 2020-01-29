import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import ConnectedDashboard, { Dashboard } from "./Dashboard";
import { store } from "../../Redux/store";

const user = {
  user: {
      loggedIn: true
  }
};

const games = {
  gameData: [],
  teamData: [],
  loading: false
};

const setUp = (props = {}) => {
    const component = mount(<Dashboard user={user} games={games}/>, { context: { store } });
    return component;
  };

describe("Dashboard Component", () => {
    let component;
  it("Should render Dashboard component without errors", () => {
    shallow(<Dashboard user={user} games={games} />, { context: { store } });
  });

  it("Should receive current game days", () => {
        component = setUp()
        // expect(component.state('currentGameDays').length > 5).toBe(true)
        // console.log(component.state('currentGameDays'))
  });
});
