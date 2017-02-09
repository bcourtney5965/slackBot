var Router = require('express').Router();
var controllers = require('../controllers');

// Create route handlers for each of the six methods in pokemonController
Router.route('/users').post(controllers.createUser);











Router.route('/hello').post(controllers.hellobot);
Router.route('/').get(controllers.getController);
Router.route('/').post(controllers.postController);

module.exports = Router;
