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
  console.log(`req.body.text = ${req.body.text}`);
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
