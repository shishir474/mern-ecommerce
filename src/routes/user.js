const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userController = require('../controllers/user_controller');

router.post('/signin', (req, res)=>{
  
})


router.post('/signup', userController.signup);

module.exports = router;