const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const FriendsModel = new mongoose.model("friends", mongooseSchema);
module.exports = FriendsModel;
