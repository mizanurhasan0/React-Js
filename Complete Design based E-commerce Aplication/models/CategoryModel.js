const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trime: true, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", CategorySchema);
