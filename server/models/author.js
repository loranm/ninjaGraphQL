const mongoose = require("mongoose");

const authorProperties = {
  name: String,
  age: Number
};

const authorSchema = new mongoose.Schema(authorProperties);

module.exports = mongoose.model("Author", authorSchema);
