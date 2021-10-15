const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim:true,
        min:3,
        max:20
    },
    lastName:{
        type: String,
        required: true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase: true,
    },
    hash_password:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true, 
        trim: true,
        lowercase: true,
        unique:true
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    profilePicture:{type: String},
    conntactNumber:{type: String}

},{timestamps: true})

// used bcrypt's hashSync method to encrypt passwords
userSchema.virtual('password')
.set(function(password){
 this.hash_password = bcrypt.hashSync(password,10);
});

//adding a virtual key fullname using the firstName and lastName
userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
})

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}
const User = mongoose.model('User', userSchema);
module.exports = User;