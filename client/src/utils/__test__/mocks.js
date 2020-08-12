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

mocks.places = [
  {
    business_status: 'OPERATIONAL',
    formatted_address: "The Regent's Park, The Park Office the Storeyard Inner Circle, London NW1 4NR, United Kingdom",
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    plus_code: {
      compound_code: 'GRHX+8P London, United Kingdom',
      global_code: '9C3XGRHX+8P'
    },
    rating: 4.7,
    reference: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    types: [ 'park', 'point_of_interest', 'establishment' ],
    user_ratings_total: 167,
    day: 0,
    inMyList: true
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: 'The Old Police House Hyde Park, London W2 2UH, United Kingdom',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: '45bf5bfed2c45956c870d483587b6b2657e8a6af',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    plus_code: {
      compound_code: 'GR5M+6V London, United Kingdom',
      global_code: '9C3XGR5M+6V'
    },
    rating: 4.5,
    reference: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    types: [ 'park', 'point_of_interest', 'establishment' ],
    user_ratings_total: 74,
    day: 0,
    inMyList: true
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '52 Mulgrave Rd, London NW10 1BT, United Kingdom',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
    name: 'Gladstone Park',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
    plus_code: {
      compound_code: 'HQ46+Q8 London, United Kingdom',
      global_code: '9C3XHQ46+Q8'
    },
    rating: 4.5,
    reference: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
    types: [
      'park',
      'tourist_attraction',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 2174,
    day: 0,
    inMyList: true
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: 'Millbank, London SW1P 3JA, United Kingdom',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
    id: 'db4c89034776b7a8445313e5a6f86ccbf5956cd2',
    name: 'Victoria Tower Gardens South',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
    plus_code: {
      compound_code: 'FVWF+QX London, United Kingdom',
      global_code: '9C3XFVWF+QX'
    },
    rating: 4.5,
    reference: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
    types: [
      'park',
      'tourist_attraction',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 2589,
    day: 0,
    inMyList: true
  }
]

module.exports = { mocks };
