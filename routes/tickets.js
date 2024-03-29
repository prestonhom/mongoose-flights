var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/tickets');


router.get('/flights/:id/tickets/new', ticketsController.newTicket);
router.post('/flights/:id/tickets', ticketsController.create);

module.exports = router;