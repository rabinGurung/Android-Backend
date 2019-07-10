const express = require('express')
const router = express.Router()
const {generateHash, compareHash} = require('../Authentication/Hash/bcrypt')
const {findOneUser,findOneFacebookUser} = require('../Database Controller/userController')
const {genToken} = require('../Authentication/Token/jwt')

router.post('/login',findOneUser,compareHash,genToken,(req,res)=>{
    res.status(202).send({
        'message':'Logged In Successfully',
        'token':req.genToken,
        'verified':req.verified
    })
})

router.post("/facebooklogin",findOneFacebookUser,compareHash,genToken,(req,res)=>{
    console.log(req.genToken)
    res.status(202).send({
        'message':'Logged In Successfully',
        'token':req.genToken,
        'verified':req.verified
    })
})

module.exports = router