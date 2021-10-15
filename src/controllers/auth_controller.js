const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = function(req,res){
       // checking if user already exists
   User.findOne({email:req.body.email}, (err, user)=>{
    if(user){
        return res.status(400).json({
            message:'User already exists'
        })
    }

    // else create the user
    User.create(req.body, (err,user)=>{
        if(err){
             return res.status(400).json({
                 message:'error in creating the user'
             })
        }
        return res.status(201).json({
            message: 'User created succesfully',
            user: user
        })
    });


})
}


exports.signin = (req, res) => {
    User.findOne({ email: req.body.email },function(err,user){
        if(err) {
            return res.status(400).json({
                message:'error in finding the user' 
            })
        }

        if(user.authenticate(req.body.password)){
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.status(200).json({
                token,
                user: {_id, firstName, lastName, email, role, fullName}
            });
        }else{
            return res.status(400).json({
                message: 'Invalid email/Password'
            })
        }
    })

}

