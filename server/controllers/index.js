// var exports = module.exports = {}

exports.getController = (req, res) => {
  console.log('inside getController');
  res.status(200).json({"inside": "getController"});
};

exports.postController = (req, res) => {
  console.log('inside postController');
  res.status(200).json({"inside": "postController"});
};

exports.hellobot = (req, res) => {
  // var userName = req.body.user_name;
  var channel_name = req.body.channel_name;
  var botPayload = {
    text : 'Hello, ' + channel_name + '!'
  };

  // avoid infinite loop
  if (channel_name !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
