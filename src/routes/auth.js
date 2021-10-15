const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authController = require('../controllers/auth_controller');

router.post('/signin', authController.signin)
router.post('/signup', authController.signup);

module.exports = router;