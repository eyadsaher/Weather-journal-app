// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Require cors & body-parser
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
app.post('/postData', function (req, res) {
    projectData = { ...req.body };
    res.send();
  })
app.get('/getTheData', function (req, res) {
    res.send(projectData);
  })

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(4000, function () {
    console.log('Server is working perfectly');
  })