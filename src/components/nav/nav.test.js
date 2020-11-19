import React from "react";
import { render } from "@testing-library/react";
import nav from "./nav";

describe("nav tests", () => {
  it("should render", () => {
    expect(render(<nav />)).toBeTruthy();
  });
});
