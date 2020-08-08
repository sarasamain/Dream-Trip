import React from "react";
import {
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Recommendation from "./Recommendation.jsx";

const places = [
  { name: "place 0", address: "place 0 address", price: 1, rating: 1, place_id: "place0", photos: [{ photo_reference: "place0url" }] },
  { name: "place 1", address: "place 1 address", price: 2, rating: 1, place_id: "place1", photos: [{ photo_reference: "place1url" }] },
  { name: "place 2", address: "place 2 address", price: 3, rating: 1, place_id: "place2", photos: [{ photo_reference: "place2url" }] },
];

const exploreplaces = [
  { name: "expplace 0", address: "address 0", price: 0, rating: 0, place_id: "exp0", },
  { name: "expplace 1", address: "address 1", price: 0, rating: 0, place_id: "exp1", },
  { name: "expplace 2", address: "address 2", price: 0, rating: 0, place_id: "exp2" }
];

describe("Recommendation", () => {
  it("displays the recommended places", () => {

    const loadPlaces = jest.fn();

    render(
      <Router>
        <Recommendation places={places} exploreplaces={exploreplaces} loadPlaces={loadPlaces} />
      </Router>
    );

    places.forEach((place) => {
      expect(screen.getByText(place.name)).toBeInTheDocument();
    });
  });
});
