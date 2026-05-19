// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// INDUCES

// INDEX - GET /api/books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        console.error("Error fetching books: ", error);
        res.status(500).json({ message: error.message });
    }
});

// DELETE - DELETE /api/books/:id
router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book: ", error);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE - PUT /api/books/:id
router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (error) {
        console.error("Error updating book: ", error);
        res.status(500).json({ message: error.message });
    }
});

// CREATE - POST /api/books
router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error("Error creating book: ", error);
        res.status(400).json({ message: error.message });
    }
});

// SHOW - GET /api/books/:id
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (error) {
        console.error("Error fetching book: ", error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;