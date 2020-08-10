import {
  tripDuration,
  placesPerType
} from "../homeFunctions.js";
import moment from 'moment';

const momentStart = moment();
const momentEnd = moment().add(7, 'days');

describe("Homepage utils function", () => {
  it("calculates the trip duration", () => {
    expect(tripDuration(momentStart, momentEnd)).toEqual(
      8
    )
  }
  )
});
