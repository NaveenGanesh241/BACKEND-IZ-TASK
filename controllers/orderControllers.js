const order = require('../models/orderModels')
module.exports.placeOrder =(req,res)=>{
    const{productName,productSize,quantity,price}=req.body
    order.create({
        productName,
        productSize,
        quantity,
        price
    }).then(()=>{
        res.json(
            {
                message:"Created Successfully"
            }
        )
    }).catch(err=>
        {
            res.json({
                message:"Creation Unsuccessfull"
            })
        })
}