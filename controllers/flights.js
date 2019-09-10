const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    newFlight,
    create,
    show
}
//render the new page with the new flgihts
function newFlight(req, res){
    //views is already here so you do not need ANOTHER slash before flights
    res.render('flights/new', {title: 'flights #new'});
}
function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights})
    })
}
function create(req,res){

    var flight = new Flight(req.body);

    //we are creating a new instance when we refer to req.body as part of new Flight
        flight.save(function(err){

            if(err) 
            return res.render('flights/new');
            res.redirect('/flights');
        })
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', { title: 'FlightDetail', flight, tickets});
        });
    });
  }