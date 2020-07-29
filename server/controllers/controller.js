const fetch = require('node-fetch');
require('dotenv').config();
const fetchRequest = async (queries, option) => {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${queries.type}+in+${queries.location}&key=${process.env.SECRET_API_KEY}`;
  return fetch(`${url}`, option)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.log('err:', err));
};

exports.getPlaces = async (req, res) => {
  try {
    const results = await fetchRequest({
      type: req.params.type,
      location: req.params.location,
    });
    res.send(
      results.results
        .filter(
          (place) =>
            parseInt(place.user_ratings_total) >= 500 &&
            parseFloat(place.rating) >= 4.0
        )
        .sort(
          (a, b) =>
            b.rating - a.rating || b.user_ratings_total - a.user_ratings_total
        )
    );
    res.status(200);
  } catch (err) {
    res.sendStatus = 500;
    if (err) throw err;
  }
};
