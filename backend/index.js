require('dotenv').config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const Listing = require("./Modals/listingModal");

const sampleListings =require("./data1");

const PORT = process.env.PORT || 3000 ;
const URL = process.env.MONGO_URL ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("hellow iam sagar");
})

// just for adding dummy data to the database

// app.post("/add" , async(req , res)=>{
//     try{
//         for(let item of sampleListings){
//          let newListing = new Listing({
//             title: item.title,
//             description:item.description,
//             image:{
//                 filename:item.image.filename,
//                 url:item.image.url,
//             },
//             price:item.price,

//             location:item.location,
//             country:item.country,
//           })
//          await newListing.save();
//         }

//         res.send("data saved sucessfuly");

//     } catch(err){
//         console.error(err);
//     }
    
    

// })

app.get("/listings", async(req,res)=>{
    let allListings = await Listing.find({ });
    res.json(allListings);
})

app.get("/listings/:id" , async(req , res)=>{
    const {id}= req.params ;
    let listing = await Listing.findById(id) ;
    res.json(listing);
})


mongoose.connect(URL).then(()=>{
    console.log("mongodb is connected");
    app.listen(PORT , ()=>{
        console.log(`app is listening to the port ${PORT}`);
    })
})
.catch((err)=>{
    console.error("mongodb connection is failed:",err);
})



