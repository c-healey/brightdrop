import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
import App from "../App";
import Header from "../Header";
import Map from "components/fleet/Map";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});
it("shows a header", () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
it("shows a map", () => {
  expect(wrapped.find(Map).length).toEqual(1);
});
