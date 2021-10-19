const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createCategory, getCategory } = require('../controllers/category-controller');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

// __dirname gives the currentDirectory which is routes in this case. path.dirname(__dirname) returns the directory of the cwd(current directory) which is src.
// used path.join() to join the src & uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname);
    }
  })
  
const upload = multer({ storage: storage })


router.post('/category/create',requireSignin,adminMiddleware,upload.single('categoryImage'), createCategory)
router.get('/category/getcategory', getCategory);

module.exports = router;