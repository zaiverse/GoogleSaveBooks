const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBooksSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String }],
  description: String,
  link: String,
  image: String
});

const SavedBooks = mongoose.model("SavedBooks", savedBooksSchema);

module.exports = SavedBooks;
