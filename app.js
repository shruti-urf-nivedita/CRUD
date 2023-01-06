const express = require("express");
const mongoose =  require("mongoose");
const url = "mongodb://localhost:27017/Ecomm"

const app = express();
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

// to test if database connected.
con.on('open', function(){
    console.log('connected to Ecomm...')
})

//json parser middleware
app.use(express.json()) 

//to route users services
const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

// for application to listen
app.listen("9000",function(){
    console.log("server started")
})