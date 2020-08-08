import React from "react";
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";
import ExploreCard from "../explore-card.jsx";

const exploreplace = {
  name: "place 0",
  address: "address 0",
  price: 0,
  rating: 0,
  place_id: "0",
};

describe("ExploreCard", () => {
  it("displays the place information", () => {
    render(<ExploreCard key={exploreplace.place_id}
      name={exploreplace.name}
      address={exploreplace.formatted_address}
      price={exploreplace.price_level}
      rating={exploreplace.rating}
      id={exploreplace.place_id}
    />);

    expect(screen.queryByText("place 0")).toBeInTheDocument();

  });

  it("calls add when button clicked", () => {
    const onClick = jest.fn();

    render(<ExploreCard key={exploreplace.place_id}
      name={exploreplace.name}
      address={exploreplace.formatted_address}
      price={exploreplace.price_level}
      rating={exploreplace.rating}
      id={exploreplace.place_id}
      addPlace={onClick}
    />);

    fireEvent.click(screen.getByRole('button', { name: "add" }), { target: { value: 'JavaScript' } });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(exploreplace.place_id);

  });
});
