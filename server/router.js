const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/:location/:type', controller.getPlaces);

module.exports = router;
