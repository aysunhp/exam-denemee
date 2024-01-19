const User = require("./../model/userModel");

const getData = async (req, res) => {
  const allData = await User.find({});
  res.send(allData);
};

const deleteData = async (req, res) => {
  const deletedData = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(deletedData);
};

const postData = async (req, res) => {
  const newData = await User(req.body);
  newData.save();
  res.send(newData);
};

module.exports = { getData, deleteData,postData};
