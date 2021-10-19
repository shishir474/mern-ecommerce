const Product = require('../models/Product');
const slugify = require('slugify');


exports.createProduct = (req, res)=>{
  // res.status(200).json({file: req.files, body:req.body});
  const {
     name, price, description, category, quantity, createdBy
  } = req.body

  let productpictures = [];
  if (req.files.length > 0){
      productpictures = req.files.map((file)=>{
        return { img: file.originalname };
      })
  }

  const product = new Product({
     name,
     slug: slugify(name),
     price,
     description,
     productpictures,
     category,
     quantity,
     createdBy: req.user._id
  })

  product.save((error, product)=>{
      if(error)
       return res.status(400).json({error});
     
      if (product){
        res.status(201).json({product});
      }
  })
   
}