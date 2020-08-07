import React from "react";
import {
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import Recommendation from "./Recommendation.jsx";

const exploreplaces = [
  { id: 1, key: 1, name: "first place", address: "this is the address" },
  { id: 2, key: 2, name: "second place", address: "this is the address" }
];

describe("Recommendation", () => {
  // it("displays the extra places to explore", () => {
  //   render(<Recommendation exploreplaces={exploreplaces} />);

  //   exploreplaces.forEach((post) => {
  //     expect(screen.getByText(post.name)).toBeInTheDocument();
  //   });
  // });
});
