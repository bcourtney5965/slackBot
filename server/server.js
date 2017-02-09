var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes');
var hellobot = require('./hellobot');

app.use(express.static(path.join(__dirname, '../client')));

// Mount middleware &
// Expose routes
require("./middleware")(app);
app.use('/api', router);

// Test Routes
app.get('/test', function (req, res) { res.status(200).send('Hello world!') });
app.post('/hello', hellobot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

module.exports = app;
