const Router = require('express').Router()
const {getAllUsers, getOneUser, getOneByID} = require('../Database Controller/userController')
const {getUserCountJan,getUserCountFeb,
    getUserCountApril,
    getUserCountMay,
    getUserCountAugust,
    getUserCountMarch,
    getUserCountJune,
    getUserCountJuly,
    getUserCountOctober,
    getUserCountSeptember,
    getUserCountNovember,
    getUserCountDecember} = require('../Database Connection/Database')
const {verfiyToken} =  require('../Authentication/Token/jwt')

Router.get('/allusers',getAllUsers,(res)=>{
    res.sendStatus(200)
})


Router.get('/getOneUser/:username',getOneUser,(req,res)=>{
    res.send(req.result)
})

Router.get('/getOneUserByID/:id',getOneByID)

Router.get('/getUserCount',getUserCountJan,getUserCountFeb,getUserCountApril,
getUserCountAugust,
getUserCountMay,
getUserCountSeptember,
getUserCountMarch,
getUserCountJune,
getUserCountJuly,
getUserCountOctober,
getUserCountNovember,
getUserCountDecember,(req,res)=>{
    res.send({
        "jan":req.jan,
        "feb":req.feb,
        "march":req.march,
        "april":req.april,
        "may":req.may,
        "june":req.june,
        "july":req.july,
        "august":req.august,
        "october":req.october,
        "september":req.september,
        "november":req.november,
        "december":req.december
    })
})



module.exports = Router