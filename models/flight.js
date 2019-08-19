const mongoose = require('mongoose');
//capitalize Schema because it's a class 
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }

})
//parentheses wrapping an object
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United']
    },
    flightNo: {
       type: Number,
       min: 10,
       max: 9999,
    },
    departs:{
        type: Date,
        default: function(){
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX','SEA'],
        default: 'SEA'
    },
    destinations: [destinationSchema]
})

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;