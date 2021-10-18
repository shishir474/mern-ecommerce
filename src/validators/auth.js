const { check, validationResult }  = require('express-validator');
// you'll want to make sure that you validate the input and report any errors before creating the user:

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 character long'),
    check('username')
    .notEmpty()
    .withMessage('username is required'),
]


exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 character long')
]


exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if (errors.array().length > 0){
        return res.status(400).json({error: errors.array()[0].msg});
    }
    next();
}