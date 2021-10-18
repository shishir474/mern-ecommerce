const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createCategory, getCategory } = require('../controllers/category-controller');
const router = express.Router();


router.post('/category/create',requireSignin,adminMiddleware,createCategory)
router.get('/category/getcategory', getCategory);

module.exports = router;