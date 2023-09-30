const express = require('express');
const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.route('/').post(createUser).get(getUsers);
router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;
