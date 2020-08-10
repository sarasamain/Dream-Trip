let allPlaces = require('./mocks').mocks.allPlaces;
let getExplorePlacesReturn = require('./mocks').mocks.getExplorePlacesReturn;
let getExplorePlaces = require('./../loadPlaces').getExplorePlaces;

let getRecommendedPlacesReturn = require('./mocks').mocks.getRecommendedPlacesReturn;
let getRecommendedPlaces = require('./../loadPlaces').getRecommendedPlaces;

it('testing getExplorePlaces function to retrieve all places given input', ()=>{
  expect(getExplorePlaces(allPlaces, 0)).toStrictEqual(getExplorePlacesReturn[0]);
  expect(getExplorePlaces(allPlaces, 1)).toStrictEqual(getExplorePlacesReturn[1]);
})

it('testing getExplorePlaces function to retrieve all places given input', ()=>{
  expect(getRecommendedPlaces(allPlaces, 3)).toStrictEqual(getRecommendedPlacesReturn[0]);
  expect(getRecommendedPlaces(allPlaces, 2)).toStrictEqual(getRecommendedPlacesReturn[1]);
})