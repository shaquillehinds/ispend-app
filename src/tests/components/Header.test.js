// react-test-renderer
import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/header";

let startLogout, wrapper;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});
test("should render Header correctly", () => {
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("iSPEND");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});

test("should call startLogout on button click", () => {
  wrapper.find("button").at(0).simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
