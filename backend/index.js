require('dotenv').config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");


const PORT = process.env.PORT || 3000 ;
const URL = process.env.MONGO_URL ;

mongoose.connect(URL).then(()=>{
    console.log("mongodb is connected");
    app.listen(PORT , ()=>{
        console.log(`app is listening to the port ${PORT}`);
    })
})
.catch((err)=>{
    console.error("mongodb connection is failed:",err);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.send("hellow iam sagar");
})
