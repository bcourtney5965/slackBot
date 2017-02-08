var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes');

app.use(express.static(path.join(__dirname, '../client')));

// Test Routes
app.get('/test',(req, res) => {
  console.log('inside get reqest');
  res.status(200).json({"AJAX":"get response from Server"});
})
app.post('/test',(req, res) => {
  console.log('inside post reqest');
  res.status(200).json({"AJAX":"post response from Server"});
})

// Mount middleware &
// Expose routes
require("./middleware")(app);
app.use('/api', router);

module.exports = app;
