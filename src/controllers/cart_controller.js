const Cart = require('../models/Cart');

exports.addItemToCart = (req,res)=>{
     //return res.json({message: 'Hello'});
Cart.findOne({user: req.user._id}).exec((error,cart)=>{
   if (error)
   return res.status(400).json(error);

   if (cart){
      // cart already exists so just update it. Check if the item is already present in the cart
      const productid = req.body.cartItems.product;
      const item = cart.cartItems.find(c => c.product == productid);

      if (item){
                  // item already present inside cart. have to update its quantity
            Cart.findOneAndUpdate({"user":req.user._id, "cartItems.product": productid},{
                "$set":{
                    "cartItems":{
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                    }
                }
            })
            .exec((error,_cart)=>{
               if (error){
                return res.status(400).json(error);
               }

               if(_cart){
                return res.status(200).json(_cart);
               }
            })


      }else{
          // item is not present inside the cart
            Cart.findOneAndUpdate({user:req.user._id}, {
                "$push":{
                    "cartItems": req.body.cartItems
                }
            }, function(err, _cart){
                if (err)
                return res.status(400).json(err);
                
                return res.status(200).json(_cart);
            })
      }



    
   }
   else{
       // cart doesn't exist so creating a new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems:[req.body.cartItems]
            })

            cart.save((error, cart)=>{
                if (error)
                return res.status(400).json(error);

                if (cart){
                    return res.status(201).json(cart);
                }
            })
        }

})


   
}