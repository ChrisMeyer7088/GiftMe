const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const dbcfg = require('./Database/dbconfig.js');
const routes = require('./Routes/routes');

mongoose.connect(dbcfg.database, {useNewUrlParser: true}).then(()=>{
    console.log('Connected to database: ' + dbcfg.database);
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

app.use('/Auth', routes);

app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

app.listen(port, () =>{
    console.log("Listening on port " + port);
})