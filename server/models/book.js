const mongoose = require("mongoose");

const bookProperties = {
  name: String,
  genre: String,
  authorID: String
};

const bookSchema = new mongoose.Schema(bookProperties);

module.exports = mongoose.model("Book", bookSchema);
