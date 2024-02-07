const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const orderRouter = require("./routes/orderRoutes")
const web = express()

web.use(express.json())


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }

web.use(cors(corsOptions))

web.use("/orders",orderRouter)

web.listen(4000,()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/task").then(()=>{
        console.log("Connected to db Successfully in port 4000")
    }).catch(err=>{
        console.log("Failed to connect",err.message);
    })
})