// DEPENDENCIES
const mongoose = require("mongoose");

// SCHEMA
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true },
    publishedDate: { type: Date },
    inStock: { type: Boolean, default: true },
});

// MODEL
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;