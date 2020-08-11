const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const authMiddleware = require('./middlewares/auth');

router.post('/register', controller.create);
router.post('/login', controller.login);
router.get('/home', authMiddleware, controller.home);
router.get('/:location/:type', controller.getPlaces);
router.post('/logout', authMiddleware, controller.logout);


module.exports = router;
