const express = require("express")
const router = express.Router()
const {uservalidationschema} = require('../Middlewares/uservalidation')
const {validate} = require("../Middlewares/Validator")
const {Signup, Login, verifydashboard, updateprofile} = require("../Controllers/userController")

router.post("/signup", validate(uservalidationschema), Signup)
router.post("/login", Login)
router.post("/verifytoken", verifydashboard)
router.post("updateprofile", updateprofile)

// router.get("/login", (req,res)=>{
//     res.send("Welcome to fullstack")
// })

module.exports = router