import {
  getExplorePlaces,
  getRecommendedPlaces,
  defineRecommendedPlaces,
  defineExplorePlaces
} from "../loadPlaces.js";
let allPlaces = require('./mocks').mocks.allPlaces;
let getExplorePlacesReturn = require('./mocks').mocks.getExplorePlacesReturn;
let getRecommendedPlacesReturn = require('./mocks').mocks.getRecommendedPlacesReturn;
let placeEntities = require('./mocks').mocks.placeEntities;
describe('loadPlaces functions', () => {
  describe('getExplorePlaces', () => {
    it('testing getExplorePlaces function to retrieve all places given input', () => {
      expect(getExplorePlaces(allPlaces, 0)).toStrictEqual(getExplorePlacesReturn[0]);
      expect(getExplorePlaces(allPlaces, 1)).toStrictEqual(getExplorePlacesReturn[1]);
    })
    it('testing getExplorePlaces function to retrieve all places given input', () => {
      expect(getRecommendedPlaces(allPlaces, 3)).toStrictEqual(getRecommendedPlacesReturn[0]);
      expect(getRecommendedPlaces(allPlaces, 2)).toStrictEqual(getRecommendedPlacesReturn[1]);
    })
  })
  describe('testing defineExplorePlaces', () => {
    const notInMyList = ["place_id1"];
    it('should return an array with id(s) of places that are not in my list', () => {
      expect(defineExplorePlaces(placeEntities)).toStrictEqual(notInMyList);
    });
    describe("loadPlaces utils", () => {
      it("sets the explore places", () => {
        expect(defineRecommendedPlaces(placeEntities)).toEqual(
          ["place_id0", "place_id2"]
        )
      }
      )
    })
  })
})