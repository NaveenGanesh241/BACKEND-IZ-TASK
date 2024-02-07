const {placeOrder} = require("../controllers/orderControllers")
const orderRouter = require("express")
const router =orderRouter()
router.post("/placeOrder",placeOrder)
module.exports = router