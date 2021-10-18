const jwt = require('jsonwebtoken');

exports.requireSignin = function(req,res,next){
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;  //attach user with the req
    }
    else{
        return res.status(400).json({message:'Requires Authorization'});
    }
    next();
}

exports.userMiddleware = function(req,res,next){
    if (req.user.role !== 'user'){
        return res.status(400).json({message: 'User Access Denied'});
    }
    next();
}

// To set the req.user.role==='admin' have specified role: user.role at line 45 in admin auth controller. OtherWise it was showing Access Denied
exports.adminMiddleware = function(req,res,next){
    if (req.user.role !== 'admin'){
        return res.status(400).json({message: 'Admin Access Denied'});
    }
    next();
}