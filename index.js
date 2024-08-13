const express = require("express")
const app = express()
const mongoose = require("mongoose")// mongoose is used to connect to our non-relational database which is mongodb
const env = require("dotenv").config() //Config is used to setup our dotenv
const jwt = require("jsonwebtoken")// jsonwebtoken
const userrouter = require("./Route/userRouter")
const cors = require("cors")//cross origin resource, is use connect backend to frontend

app.use(cors({origin:"*"})) //the origin is used to connect to the any frontend(origin)
app.use(express.urlencoded({extended:true}))//it is used to handle our forms make it accessible as req.body
app.use(express.json({extended:true,limit:"50mb"}))
app.use("/user", userrouter)



const connect = () =>{
    try {
        const connection = mongoose.connect(process.env.URI)//it is used to access our URI inside .env
        if (connection) {
            console.log("connected to database");
        }
    } catch (error) {
        console.log(error);
    }

}
connect()

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`The app has started at ${port}`);
})