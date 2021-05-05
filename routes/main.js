const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.catshop);

//realizar el ruteo correspondiente al dogshop

//realizar el ruteo correspondiente al birdshop

module.exports = router;