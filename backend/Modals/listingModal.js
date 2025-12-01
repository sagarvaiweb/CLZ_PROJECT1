const { Schema, default: mongoose } = require("mongoose");


const listingSchema = new Schema({
     title:{
        type:String,
        required:true,
     },
     description:{
        type:String
     },
     image:{
        url:String,
        filename:String,
     },
     price:{
        type:Number
     },
     category:{
        type:String
     },
     location:{
        type:String
     },
     country:{
        type:String
     }
})

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing ;