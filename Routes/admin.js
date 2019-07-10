const Router = require('express').Router()

const { addAdmin, 
    loginAdmin}  = require('../Database Controller/adminController')
const {genAdminToken,
    verfiyAdminToken} = require('../Authentication/Token/jwt')

    const {generateHash, compareHash} = require('../Authentication/Hash/bcrypt')



    Router.post('/loginadmin',loginAdmin,compareHash,genAdminToken,(req,res)=>{
        res.status(202).send({
            "token":req.genToken
        })
    })

    Router.post('/addadmin',generateHash,addAdmin,(req,res)=>{
        res.sendStatus(200)
    })



module.exports = Router