const User = require('../../models/User');
const jwt = require('jsonwebtoken');


exports.changeRole = function(req,res,next){
    req.body.role = 'admin'
    next();
}

exports.signup = function(req,res){
       // checking if user already exists
   User.findOne({email:req.body.email}, (err, user)=>{
    if(user){
        return res.status(400).json({
            message:'Admin already registered'
        })
    }

     User.create(req.body, (err,user)=>{
        if(err){
             return res.status(400).json({
                 message:'error in creating the admin'
             })
        }
    
        return res.status(201).json({
            message: 'Admin created succesfully',
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

        if(user.authenticate(req.body.password) && user.role === 'admin'){
            const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' });
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

