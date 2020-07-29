const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/:type/:location', controller.getPlaces);
// router.post('/events', controller.postEvent);

module.exports = router;
