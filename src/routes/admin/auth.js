const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const authController = require('../../controllers/admin/auth_controller');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth');

router.post('/admin/signin',validateSigninRequest, isRequestValidated, authController.signin)
router.post('/admin/signup',validateSignupRequest, isRequestValidated, authController.changeRole, authController.signup);
// changeRole middleware function changes the bydefault role from user to admin


module.exports = router;