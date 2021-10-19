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
        let condition, action;

        if (item){
            // item already present inside cart. have to update its quantity
                condition = {"user":req.user._id, "cartItems.product": productid};
                action = {
                    "$set":{
                        "cartItems.$":{
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }
        }else{
            // item is not present inside the cart
                condition = {user:req.user._id};
                action = {
                    "$push":{
                        "cartItems": req.body.cartItems
                    }
                }
        }

        Cart.findOneAndUpdate(condition, action)
        .exec((error,_cart)=>{
            if (error){
                return res.status(400).json(error);
            }

            if(_cart){
                return res.status(200).json(_cart);
            }
        })

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