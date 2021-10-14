const User = require('../models/User');

exports.signup = function(req,res){
       // checking if user already exists
   User.findOne({email:req.body.email}, (err, user)=>{
    if(user){
        return res.status(400).json({
            message:'User already exists'
        })
    }

    User.create(req.body, (err,user)=>{
        if(err){
             return res.status(400).json({
                 message:'error in creating the user'
             })
        }
        return res.status(201).json({
            message: 'User created succesfully' 
        })
    });


})
}