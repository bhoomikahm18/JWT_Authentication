const express = require('express');
const { signup } = require('../controllers/user_controller.js');

const router = express.Router();

router.post('/signup', signup);

module.exports = router;