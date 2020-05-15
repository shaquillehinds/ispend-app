// react-test-renderer
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("iSPEND");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});
