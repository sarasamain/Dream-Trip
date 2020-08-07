import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import ItineraryCard from './components/itinerary-card';

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

describe('ItineraryCard', () => {
  it('displays the right day in the card', () => {
    render(<ItineraryCard 
      imgUrl="CmRaAAAAzI4cd_98WZAOOxZOdlMpxlGm2IkPofDqVAY9ReynfY…vXbhk9WRhVUxT-4TDewGhSj4TgCCcEejHC93AZ59Q818NYUgA" 
      name= "4. Tower Bridge" 
      address= "Tower Bridge Rd, London SE1 2UP, United Kingdom" 
      price="" 
      rating={4.7} 
      removePlace={null}
      id="ChIJSdtli0MDdkgRLW9aCBpCeJ4"
      tripDuration={() => 5}
      assignDay={null} 
      assignedDay="1"
    />)

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    // expect(assignedDay).toBeTruthy();+
  });
  // it('displays the right day in the card', () => {
  //   const onChange = jest.fn();
  //   render(<ItineraryCard onChange={onChange} assignedDay="1"></ItineraryCard>)

    // expect(screen.getByDisplayValue(1)).toBeInTheDocument();
    // expect(assignedDay).toBeTruthy();
  // })
})


// describe("SearchBar", () => {

//   it("displays the right value", () => {
//     render(<SearchBar query={"the meaning of life"} onChange={null} />);

//     expect(screen.getByDisplayValue("the meaning of life")).toBeInTheDocument();
//   });


// it("calls back when value changes", () => {
//   const onChange = jest.fn();

//   render(<SearchBar onChange={onChange} query="" />);

//   fireEvent.change(screen.getByLabelText("Search articles"), {target: {value: "searching for something"}});

//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(onChange).toHaveBeenCalledWith("searching for something", expect.anything());

// });
