const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const dbcfg = require('./Config/dbconfig.js');
const routes = require('./Routes/routes');
const Holiday = require('./Database/Models/holiday');

//Database Connection
mongoose.connect(dbcfg.database, {useNewUrlParser: true}).then(()=>{
    console.log('Connected to database: ' + dbcfg.database);
    // Holiday.storeDate(new Holiday({
    //     Name: "Public Sleeping Day", 
    //     Date:'02/28', 
    //     Description:"Because society needs to relax a bit. Make sure to bring your valueables!"}), 
    // (err, date) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log(date);
    //     }
        
    // });
}, err => {
    console.log('Error connecting to database');
});

const app = express();
//Port
const port = 3000;

//Cors
app.use(cors());
//Body-Parser
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./Config/passport')(passport);

app.use(express.static(path.join(__dirname, 'public')));

//Routing
app.use('/', routes);

app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

app.listen(port, () =>{
    console.log("Listening on port " + port);
})