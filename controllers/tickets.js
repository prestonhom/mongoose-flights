const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,
    newTicket
}
function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
      res.redirect(`/flights/${req.params.id}`);
    }); 
  }
  
  function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('tickets/new', {title: 'Add Ticket', flight});
    });
  }