const express = require("express");
const app = express();
require("./helper/init_mongodb.js")

const Mynotes=require('./routes/TodoRouter.js')
const cookieParser = require("cookie-parser");
const cors = require("cors");



app.use(express.json({limit: '50mb'}));
app.use(cors({
    origin: "http://localhost:3000",

    credentials: true,
  })) 
  app.use(cookieParser());
app.use("/api/todo/",Mynotes)

// http://localhost:3000/api/paymentmode/Razorpay/orders
app.listen(process.env.PORT||5000, _=> console.log("backend server is running on port: "+ process.env.PORT))


