const express = require('express')
const Router = express.Router()
const {addFriend,getFriends} = require('../Database Controller/friendController')
Router.post('/addfriend',addFriend)
Router.get('/allfriend/:userid',getFriends)


module.exports = Router