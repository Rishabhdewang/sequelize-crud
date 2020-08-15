const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes/route');
const db = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

app.listen(port, () => {
  console.log('listening on port:'+ port);
});

// body parser
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routing
app.use('/', require('./routes/route'));

//testing
app.get('/test1', (req,res) => {
    res.send("testing.......");
})