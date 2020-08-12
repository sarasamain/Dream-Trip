const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const emailController = require('./controllers/email');

router.get('/:location/:type', controller.getPlaces);
router.post('/sendemail', emailController.sendEmail);

module.exports = router;
