const express =require("express");
const cors = require('cors');
const mongoose =require("mongoose");
const userroutes=require("./routes/photo_routes")
const app =express();
app.use(cors());
app.use(express.json());
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const path = require('path')
app.use('/images', express.static(('images')))
app.use('/users',userroutes)
mongoose.connect("mongodb://localhost:27017/uploads2").then((res)=>console.log("connecting")).catch((err)=>console.log(err))
app.listen(3001,()=>console.log("server started"))

