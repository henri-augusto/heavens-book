const express = require('express');
const { signUp, getStream } = require('../controllers/authContrller');

const router = express.Router();

router.route('/').post(signUp).get(getStream);

module.exports = router;
