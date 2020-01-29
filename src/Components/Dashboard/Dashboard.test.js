import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { Dashboard } from "./Dashboard";
import { testStore } from "../../../Utility/index";

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

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Dashboard store={store} user={user} games={games} />
  );
  return wrapper;
};

describe("Dashboard Component", () => {
  let wrapper;
  const initialState = {
    user: {},
  };
  wrapper = setUp(initialState);

  it("Should render Dashboard component without errors", () => {
    setUp();
  });

  it("Should receive current game days", () => {
    // component = setUp()
    // expect(component.state('currentGameDays').length > 5).toBe(true)
    // console.log(component.state('currentGameDays'))
  });
});
