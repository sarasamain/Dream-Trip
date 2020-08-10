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

mocks.placeEntities = {
  place_id0: {
    business_status: "CLOSED_TEMPORARILY",
    day: 0,
    formatted_address: "Great Russell St, Bloomsbury, London WC1B 3DG, United Kingdom",
    id: "ad6aaec7b7b0fa2c97a127c24845d76135e760ae",
    inMyList: true,
    name: "Place 0",
    photos: [{ photo_reference: "place0url" }],
    place_id: "place_id0",
    rating: 4.7,
    types: (4)["museum", "tourist_attraction", "point_of_interest", "establishment"],
    user_ratings_total: 110022
  },
  place_id1: {
    business_status: "CLOSED_TEMPORARILY",
    day: 0,
    formatted_address: "Great Russell St, Bloomsbury, London WC1B 3DG, United Kingdom",
    id: "ad6aaec7b7b0fa2c97a127c24845d76135e760ye",
    inMyList: false,
    name: "Place 0",
    photos: [{ photo_reference: "place0url" }],
    place_id: "place_id1",
    rating: 4.7,
    types: (4)["museum", "tourist_attraction", "point_of_interest", "establishment"],
    user_ratings_total: 110022
  },
  place_id2: {
    business_status: "CLOSED_TEMPORARILY",
    day: 0,
    formatted_address: "Great Russell St, Bloomsbury, London WC1B 3DG, United Kingdom",
    id: "ad6aaec7b7b0fa2c97a127c24845d76135e760be",
    inMyList: true,
    name: "Place 0",
    photos: [{ photo_reference: "place0url" }],
    place_id: "place_id2",
    rating: 4.7,
    types: (4)["museum", "tourist_attraction", "point_of_interest", "establishment"],
    user_ratings_total: 110022
  },
};

module.exports = { mocks };
