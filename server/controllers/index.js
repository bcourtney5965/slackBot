// var exports = module.exports = {}

exports.getController = (req, res) => {
  console.log('inside getController');
  res.status(200).json({"inside": "getController"});
};

exports.postController = (req, res) => {
  console.log('inside postController');
  res.status(200).json({"inside": "postController"});
};
