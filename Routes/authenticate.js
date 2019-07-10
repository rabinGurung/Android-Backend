const Router = require('express').Router()
const {findOneEmail,findOneUsername} = require('../Database Controller/userController')
Router.post('/checkemail',findOneEmail,(req,res)=>{
    res.status(200).send('hello no email found')
})

Router.post('/checkuser',findOneUsername,(req,res)=>{
    res.status(200).send('hello no user found')
})


module.exports = Router