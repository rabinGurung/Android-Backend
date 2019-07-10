const express = require('express')
const router = express()
const {verfiyToken} = require('../Authentication/Token/jwt')

router.get('/',verfiyToken,(req,res)=>{
    res.send('hey hey!')
})

module.exports = router