const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    ingredients: String,
    type: String,
    price: String,
    image:String
  },
  {
    collection: "menu",
  }
);

const User = mongoose.model("menu", userSchema);

module.exports = User;
