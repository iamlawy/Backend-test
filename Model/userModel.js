const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const userschema = mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
   // profileimage: { type: String, required:true}, 

}, {timestamps:true})

const usermodel = mongoose.model("fullstack_collection", userschema)


module.exports = usermodel