import React from "react";
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";
import DetailCard from "../detail-cards.jsx";

const place = {
  name: "place 0",
  address: "place 0 address",
  price: 1,
  rating: 1,
  place_id: "0",
  photos: [{ photo_reference: "place0url" }]
};

describe("DetailCard", () => {
  it("displays the place information", () => {
    render(<DetailCard
      key={place.place_id}
      id={place.place_id}
      name={place.name}
      address={place.formatted_address}
      price={place.price_level}
      rating={place.rating}
      imgUrl={place.photos[0].photo_reference}
    />);

    expect(screen.queryByText("place 0")).toBeInTheDocument();

  });

  it("calls delete when button clicked", () => {
    const onClick = jest.fn();

    render(<DetailCard
      key={place.place_id}
      id={place.place_id}
      name={place.name}
      address={place.formatted_address}
      price={place.price_level}
      rating={place.rating}
      imgUrl={place.photos[0].photo_reference}
      removePlace={onClick}
    />);

    fireEvent.click(screen.getByRole('button', { name: "delete" }), { target: { value: 'JavaScript' } });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(place.place_id);

  });
});