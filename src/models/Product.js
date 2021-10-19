const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String, 
        required: true,
        trim : true
    },
    quantity:{
        type: Number,
        required: true
    },
    productpictures:[
        {
            img:{ type: String }
        }
    ],
    reviews:[
        {
            review:{type: String},
            userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
        }
    ],
    offer:{
        type: Number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    

}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);