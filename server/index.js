const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser');
const routes=require('./routes/auth');
require("dotenv").config({
    path: "./config/.env"
})

const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(routes);
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(4001,()=>{
    console.log("Server started on port 4001");
})
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("db connection established");
}).catch((e)=>{
    console.log(e);
})