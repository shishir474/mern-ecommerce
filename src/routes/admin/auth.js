const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const authController = require('../../controllers/admin/auth_controller');

router.post('/admin/signin', authController.signin)
router.post('/admin/signup', authController.changeRole, authController.signup);
// changeRole middleware function changes the bydefault role from user to admin


module.exports = router;