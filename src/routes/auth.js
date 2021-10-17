const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authController = require('../controllers/auth_controller');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');



router.post('/signin', validateSigninRequest,isRequestValidated, authController.signin)
router.post('/signup',validateSignupRequest,isRequestValidated, authController.signup);

// fr accessing user profile user must be logged in. so created a middleware function whch fetches the user from jwt token and sets it in req.user
// router.post('/profile', authController.requireSignin ,function(req,res){
//     return res.status(200).json({
//         user: "profile"
//     })
// })

module.exports = router;