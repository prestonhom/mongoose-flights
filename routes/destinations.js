var express = require('express');
var router = express.Router();
var destinationsController = require('../controllers/destinations')

// router.get('/flights/:id', destinationsController.show)
router.post('/flights/:id/destinations', destinationsController.create);

module.exports = router;