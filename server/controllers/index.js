var axios = require('axios');
var keys = require('../../keys.js');
var CLIENT_ID = keys.synapseId ;
var CLIENT_SECRET = keys.synapseSecret ;
var _async = require('asyncawait');
var _await = require('asyncawait');

exports.createUser = function(req, res) {
  const email = req.body.email;
  const phone = req.body.phone;
  const name = req.body.name;
  var body = {
      "logins": [
        {
          "email": email
        }
      ],
      "phone_numbers": [
        phone
      ],
      "legal_names": [
        name
      ]
  }
  var config = {
    headers: {
      "Content-Type": "application/json",
      "X-SP-GATEWAY": `${CLIENT_ID}|${CLIENT_SECRET}`,
      "X-SP-USER-IP" : "216.3.128.12"
      // "X-SP-USER": `${OAUTH_KEY should be provided upon init user creation}|${Should be provided from front end}`
    }
  };
  axios.post('https://sandbox.synapsepay.com/api/3/users', body, config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404);
    });
};

















exports.getController = (req, res) => {
  console.log('inside getController');
  res.status(200).json({"inside": "getController"});
};

exports.postController = (req, res) => {
  console.log('inside postController');
  res.status(200).json({"inside": "postController"});
};

exports.hellobot = (req, res) => {
  console.log(`req.body.text = ${req.body.text}`);
  console.log(`req.body.user_name = ${req.body.user_name}`);
  console.log(`req.body.token = ${req.body.token}`);
  console.log(`req.body.channel_name = ${req.body.channel_name}`);
  var userName = req.body.user_name;
   var botPayload = {
     text : 'Hello, ' + userName + '!'
   }; 
   // avoid infinite loop
   if (userName !== 'slackbot') {
     return res.status(200).json(botPayload);
   } else {
     return res.status(200).end();
   }
}
