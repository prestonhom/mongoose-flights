var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')

/* GET users listing. */
//get the new flight page
// we are already at /flights nowe have to get /new
router.get('/', flightsController.index);
router.get('/new', flightsController.newFlight);
router.get('/:id', flightsController.show)
router.post('/', flightsController.create)
//when there is post data then we can we going to execute the create method 
module.exports = router;
