import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import ItineraryCard from './components/itinerary-card';

const data = {
  imgUrl:"CmRaAAAAzI4cd_98WZAOOxZOdlMpxlGm2IkPofDqVAY9ReynfY…vXhk9WRhVUxT-4TDewGhSj4TgCCcEejHC93AZ59Q818NYUgA",
  name: "4. Tower Bridge",
  address: "Tower Bridge Rd, London SE1 2UP, United Kingdom",
  price:"", 
  rating: 4.7, 
  removePlace: null,
  id:"ChIJSdtli0MDdkgRLW9aCBpCeJ4",
  tripDuration: () => 5,
  assignDay: null,
  assignedDay:"1",
}

describe('ItineraryCard', () => {
  it('displays the right day in the card', () => {
    render(<ItineraryCard 
      imgUrl={data.imgUrl}
      name=  {data.name}
      address= {data.address}
      price= {data.price}
      rating={data.rating}
      removePlace={data.removePlace}
      id={data.id}
      tripDuration={data.tripDuration}
      assignDay={data.assignDay}
      assignedDay="1"
    />)

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    // expect(assignedDay).toBeTruthy();+
  });
  // it('Calls back when value changes', () => {
  //     const onChange = jest.fn();

  // })
})
// it('displays the right day in the card', () => {
//   render(<ItineraryCard onChange={onChange} assignedDay="1"></ItineraryCard>)

  // expect(screen.getByDisplayValue(1)).toBeInTheDocument();
  // expect(assignedDay).toBeTruthy();
// })


// it("calls back when value changes", () => {
//   const onChange = jest.fn();

//   render(<SearchBar onChange={onChange} query="" />);

//   fireEvent.change(screen.getByLabelText("Search articles"), {target: {value: "searching for something"}});

//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(onChange).toHaveBeenCalledWith("searching for something", expect.anything());

// });
