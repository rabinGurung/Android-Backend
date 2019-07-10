const express = require('express')
const router = express.Router()
const {generateHash} = require('../Authentication/Hash/bcrypt')
const {validateForsignUp, registerUser} = require('../Database Controller/userController')

router.post('/signup',validateForsignUp,generateHash,registerUser,(req,res)=>{
    res.status(201).send('User registered Successfully')
})


router.post("/facebooksignup",generateHash,registerUser,(req,res)=>{
    res.status(201).send("User registered Succesfully")
})


module.exports = router