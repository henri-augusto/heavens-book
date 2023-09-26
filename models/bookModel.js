const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A book must have a name'],
    unique: true,
    trim: true,
    maxLength: 40,
    minLength: 5,
  },
  author: {
    type: String,
    required: [true, 'A book must have an author'],
    trim: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: [true, 'A book must belong category'],
  },
  price: {
    type: Number,
    required: [true, 'A book must have a price for selling'],
  },
  format: {
    type: String,
    enum: {
      values: ['PDF', 'Livro'],
    },
  },
  release: {
    type: Date,
  },
  imageCover: {
    type: String,
    required: [true, 'A book must have a cover image'],
  },
  url: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
