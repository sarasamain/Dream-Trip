import {
  tripDuration,
  placesPerType
} from "../homeFunctions.js";
import moment from 'moment';
const getExplorePlaces = require('./../loadPlaces').getExplorePlaces;
describe('Home functions', () => {
  describe('testing placesPerType', () => {
    const startDateStr = "Mon Aug 10 2020 12:17:17 GMT+0200 (Central European Summer Time)";
    const startDateString = "Mon Aug 10 2020 12:41:11 GMT+0200 (Central European Summer Time)";
    const endDateWed = "Wed Aug 12 2020 12:17:00 GMT+0200 (Central European Summer Time)";
    const endDateFri = "Fri Aug 14 2020 12:41:00 GMT+0200 (Central European Summer Time)";
    const filteredCategory = ["Sightseeing"];
    const filteredCategories = ["Kids", "Nature"];
    it('should return a number that correspondes to number of places for selected period for one filtered category', () => {
      expect(placesPerType(startDateStr, endDateWed, filteredCategory)).toStrictEqual(12);
    }),
      it('should return a number that correspondes to number of places for selected period for two filtered categories', () => {
        expect(placesPerType(startDateString, endDateFri, filteredCategories)).toStrictEqual(10);
      })
  });
  describe("Homepage utils function", () => {
    const momentStart = moment();
    const momentEnd = moment().add(7, 'days');
    it("calculates the trip duration", () => {
      expect(tripDuration(momentStart, momentEnd)).toEqual(
        8
      )
    }
    )
  })
});