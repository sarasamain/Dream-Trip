const mocks = {};

mocks.allPlaces = [
  {
    place_id: "one",
    prop: 1
  },
  {
    place_id: "two",
    prop: 2
  },
  {
    place_id: "three",
    prop: 3
  }
]

mocks.getExplorePlacesReturn = [
  {
    one: {
      prop: 1,
      place_id: "one",
      inMyList: false,
      day: 0
    },
    two: {
      prop: 2,
      place_id: "two",
      inMyList: false,
      day: 0
    },
    three: {
      prop: 3,
      place_id: "three",
      inMyList: false,
      day: 0
    }
  },
  {
    two: {
      prop: 2,
      place_id: "two",
      inMyList: false,
      day: 0
    },
    three: {
      prop: 3,
      place_id: "three",
      inMyList: false,
      day: 0
    }
  }
]

mocks.getRecommendedPlacesReturn = [
  {
    one: {
      prop: 1,
      place_id: "one",
      inMyList: true,
      day: 0
    },
    two: {
      prop: 2,
      place_id: "two",
      inMyList: true,
      day: 0
    },
    three: {
      prop: 3,
      place_id: "three",
      inMyList: true,
      day: 0
    }
  },
  {
    one: {
      prop: 1,
      place_id: "one",
      inMyList: true,
      day: 0
    },
    two: {
      prop: 2,
      place_id: "two",
      inMyList: true,
      day: 0
    }
  }  
]

module.exports = { mocks };
