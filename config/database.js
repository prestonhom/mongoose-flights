const mongoose = require('mongoose');
//connect to the mongodb localhost for the port number for mongoDB
//then name the database
mongoose.connect('mongodb://localhost: 27017/flights',{
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection; 
//event listening that happens every time we are connected
db.on('connected', function(){
    console.log(`Connected to MongoDb at ${db.host} : ${db.port}`)
});
