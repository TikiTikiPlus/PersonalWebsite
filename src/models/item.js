const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
});

module.exports = mongoose.model("Item", itemSchema);