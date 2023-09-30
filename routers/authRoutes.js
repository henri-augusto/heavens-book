const express = require('express');
const { signUp, getStream } = require('../controllers/authContrller');

const router = express.Router();

router.route('/').post(signUp);

module.exports = router;
