const{SchemaTypes,Schema,model} = require("mongoose");
const orderSchema = new Schema({
    productName:SchemaTypes.String,
    productSize:SchemaTypes.String,
    quantity:SchemaTypes.Number,
    price:SchemaTypes.Number
})
const order = model("order",orderSchema);
module.exports=order