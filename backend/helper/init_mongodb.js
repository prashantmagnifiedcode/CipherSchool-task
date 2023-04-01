const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log("error",err));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

// PORT = 4000
// MONGODB_URI=mongodb://localhost:27017
// DB_NAME= part_dekho
