const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  colour:String,
  size:String,
});

module.exports = mongoose.model("Item", itemSchema);