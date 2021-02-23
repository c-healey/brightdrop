import React from "react";
import { mount } from "enzyme";
import Root from "Root";

import Header from "components/Header";
import GoogleAuth from "components/GoogleAuth";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Header />
    </Root>
  );
});
it("shows a Google auth button", () => {
  expect(wrapped.find(GoogleAuth).length).toEqual(1);
});
