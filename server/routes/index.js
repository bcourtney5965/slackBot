var Router = require('express').Router();
var controllers = require('../controllers');

// Create route handlers for each of the six methods in pokemonController
// app.post('/hello', hellobot);
Router.route('/hello').post(controllers.getController);
Router.route('/').get(controllers.getController);
Router.route('/').post(controllers.postController);

module.exports = Router;
