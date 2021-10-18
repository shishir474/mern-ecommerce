const Category = require('../models/Category');
const slugify = require('slugify');

exports.createCategory = (req,res)=>{
        
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if (req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category)=>{
        if (error){
            return res.status(400).json({error});
        }
        if (category){
            return res.status(201).json({category});
        }
 
    })
}

function getCategory(categories, parentId=null){

    let categoryList = [];
    let category;
    if (parentId==null){
        category = categories.filter(cat => cat.parentId == undefined);
    }
    else{
        category = categories.filter(cat => cat.parentId == parentId);
    }

    // looping over all the category
    for (cate of category){
      categoryList.push({
          _id: cate._id,
          name: cate.name,
          slug:cate.slug,
          children: getCategory(categories, cate._id)
      })
    }

    return categoryList;
}


exports.getCategory = (req,res)=>{
    Category.find({})
    .exec((error, categories)=>{
        if (error){
            return res.status(400).json({error});
        }
        if (categories){
            // recursive function to get the sub categories
            categoryList = getCategory(categories);
            return res.status(200).json({categoryList});
        }
 
    })
}