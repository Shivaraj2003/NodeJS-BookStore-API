import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    author: {
        type: String
    },
    publishYear: {
        type: String,
        required: true,
    },

}, {
    timestamp: true
});

const Book = mongoose.model("book", bookSchema);

export {Book};