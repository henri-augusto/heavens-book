const express = require('express');
const {
  createBook,
  getBooks,
  getOneBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

router.route('/').get(getBooks).post(createBook);

router.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook);

module.exports = router;
