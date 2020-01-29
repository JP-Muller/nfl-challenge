import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";
import { store } from "../../Redux/store";

const setUp = (props = {}) => {
  const component = shallow(<Login />, { context: { store } });
  return component;
};

describe("Login Component", () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

  it("Should render login component", () => {
    const component = shallow(<Login />, { context: { store } });
    const wrapper = component.find(".parent-container");
    expect(wrapper.length).toBe(1);
  });

//   it("Should contain the login button", () => {
//     const loginButton = component.find("<button>");
//     expect(loginButton.length).toBe(1)
//   });
});
